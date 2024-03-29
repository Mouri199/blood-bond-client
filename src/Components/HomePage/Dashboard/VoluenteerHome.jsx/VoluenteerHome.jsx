import { useEffect, useState } from "react";
import useAuth from "../../../Hook/useAuth";


const VoluenteerHome = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`https://blood-bond-server.vercel.app/profile?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {

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
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Full Name
                                        </th>
                                        <td className="px-6 py-4">
                                            {userData.name}
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Email
                                        </th>
                                        <td className="px-6 py-4">
                                            {userData.email}
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            District
                                        </th>
                                        <td className="px-6 py-4">
                                            {userData.district}
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            Blood Group
                                        </th>
                                        <td className="px-6 py-4">
                                            {userData.blood}
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    )}
                </div>
            </div>
        </>
    );
};

export default VoluenteerHome;