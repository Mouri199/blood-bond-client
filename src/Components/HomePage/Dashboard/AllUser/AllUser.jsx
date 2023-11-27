import {  useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";


const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

   

    const handleAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">

                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>

                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>

                        <th scope="col" className="px-6 py-3">
                            status
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((donor, index) => (
                        <tr
                            key={donor._id}
                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                        >
                            <td className="px-6 py-4">{index + 1}</td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {donor.name
                                }
                            </th>
                            <td className="px-6 py-4">{donor.email}</td>
                            <td className="px-6 py-4">
                                {donor.role === 'admin' ? "Admin" : <button
                                    onClick={() => handleAdmin(donor)}
                                    className="btn btn-ghost btn-lg">
                                    <FaUser className="text-red-600"></FaUser>
                                </button>}
                            </td>
                            <td className="px-6 py-4">
                                <button
                                    onClick={() => handleDeleteUser(donor)}
                                    className="btn btn-ghost btn-lg">
                                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                </button>

                                {/* <details>
                                    <summary className="">Pending</summary>
                                    <ul className=" shadow menu bg-base-100">
                                        <li><a>Inprogress</a></li>
                                        <li><a>Done</a></li>
                                        <li><a>Cancel</a></li>

                                    </ul>
                                </details> */}
                                {/* <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
                                <span>Pending</span>
                            </span> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;