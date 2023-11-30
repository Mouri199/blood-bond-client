import { useEffect, useState } from 'react';
import useAuth from '../Hook/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const AdminUser = () => {
    const { user, load } = useAuth();
    const [userData, setUserData] = useState(null);

    console.log(userData);
    // const [loading, setLoading] = useState(true)

    const {
        register,
        handleSubmit,
        
    } = useForm()


    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                try {
                    const response = await fetch(`https://blood-bond-server.vercel.app/profile?email=${user.email}`);
                    const data = await response.json();
                    const matchedUser = data.find((userData) => userData.email === user.email);
                    setUserData(matchedUser);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchUserData();
    }, [user]);


    const onSubmit = async (data) => {
        console.log(data);
        const formData = {

            district: data.district,
            upazila: data.upazila,
            blood: data.blood
        }
        await axios.put(`https://blood-bond-server.vercel.app/users/${data.id}`, formData)
            .then((res) => {
                console.log(res);
               
                Swal.fire("Updated Your Profile!")

            })
            .catch((error) => console.error("Error updating status:", error))


    }
    if (load) {
        return <p>Loading...</p>; // or some loading indicator
    }
    return (
        <>
            <Helmet>
                <title>Blood Bond | Admin Home </title>
            </Helmet>
            <div className="lg:w-[1000px]">
                <div className="lg:flex justify-between items-end px-10 lg:px-20">
                    <div className="lg:flex lg:items-end lg:gap-10">
                        <img className="lg:w-[300px] w-[100px]" src={userData?.photo} alt="" />
                        <h3 className="lg:text-3xl font-bold">{userData?.name}</h3>
                    </div>

                    <button className="bg-redclr text-lg rounded-lg lg:p-1" onClick={() => document.getElementById('my_modal_1').showModal()}>Edit Profile</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input type="text" className='text-white' defaultValue={userData?._id} {...register("id")} />
                                <div className="flex gap-10 ">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Full Name</span>
                                        </label>
                                        <label>
                                            <input type="text" readOnly defaultValue={user.displayName} name="photo" {...register("name")} className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <label>
                                            <input type="text" readOnly defaultValue={user.email} name="photo" {...register("email")} className="input input-bordered w-full" />
                                        </label>
                                    </div>

                                </div>
                                <div className="flex gap-10 ">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">District</span>
                                        </label>
                                        <label>
                                            <input type="text" defaultValue={userData?.district} name="photo" {...register("district")} className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text">Upazila</span>
                                        </label>
                                        <label>
                                            <input type="text" name="photo" defaultValue={userData?.upazila} {...register("upazila")} className="input input-bordered w-full" />
                                        </label>
                                    </div>

                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Blood Group</span>
                                    </label>
                                    <label>
                                        <input type="text" name="photo" defaultValue={userData?.blood} {...register("blood")} className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <input type="submit" value="Update Profile" className="btn bg-redclr mx-auto  hover:bg-hoverclr w-full my-10" />

                            </form>
                            <div className="modal-action">

                                <form method="dialog">

                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
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

                    )}
                </div>

            </div>
        </>
    );
};

export default AdminUser;