import React, { useEffect, useState } from 'react';
import useAuth from '../Hook/useAuth';

const AdminUser = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:8000/profile?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    // Assuming the API returns an array of users, find the one that matches the email
                    const matchedUser = data.find((userData) => userData.email === user.email);
                    setUserData(matchedUser);
                })
                .catch((error) => console.error("Error fetching data:", error));
        }
    }, [user]);
    return (
        <>
            <div className="lg:w-[1000px]">
                <div className="lg:flex justify-between items-end px-10 lg:px-20">
                    <div className="lg:flex lg:items-end lg:gap-10">
                        <img className="lg:w-[300px] w-[100px]" src={user?.photoURL} alt="" />
                        <h3 className="lg:text-3xl font-bold">{user?.displayName}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                        {/* <FaBell className="lg:block hidden" /> */}
                        <button className="bg-redclr text-lg rounded-lg lg:p-1">Edit Profile</button>
                    </div>
                </div>

                <div>
                    {userData && (


                        <div key={userData._id} className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-900 uppercase dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">

                                        </th>
                                        <th scope="col" className="px-6 py-3">

                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Full Name
                                        </th>
                                        <td className="px-6 py-4">
                                            {userData.name}
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Email
                                        </th>
                                        <td className="px-6 py-4">
                                            {userData.email}
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            District
                                        </th>
                                        <td className="px-6 py-4">
                                            {userData.district}
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Blood Group
                                        </th>
                                        <td className="px-6 py-4">
                                            {userData.blood}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        // <div className="px-20 py-10" key={userData._id}>
                        //     <p className="text-center  text-3xl font-semibold">About</p>
                        //     <div className="flex justify-center gap-28 ">
                        //         <h3>Full Name</h3>
                        //         <p>{user.displayName}</p>
                        //     </div>
                        //     <div className="flex justify-center  gap-28 ">
                        //         <h3>Email</h3>
                        //         <p>{user.email}</p>
                        //     </div>
                        //     <div className="flex ">
                        //         <h3>District</h3>
                        //         <p>{userData.district}</p>
                        //     </div>

                        //     <div className="flex">
                        //         <h3>Blood Group</h3>
                        //         <p>{userData.blood}</p>
                        //     </div>
                        // </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AdminUser;