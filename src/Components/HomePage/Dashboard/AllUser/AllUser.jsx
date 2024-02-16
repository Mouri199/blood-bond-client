import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Helmet } from "react-helmet-async";


const AllUser = () => {
    
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })



    const handleActive = user => {
        axiosSecure.patch(`/users/active/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `You activeted ${user.name} now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleBlocked = user => {
        axiosSecure.patch(`/users/blocked/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `You blocked ${user.name}`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

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
    const handleUser = user => {
        axiosSecure.patch(`/users/user/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an User Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    const handleVoluenteer = user => {
        axiosSecure.patch(`/users/voluenteer/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Voluenteer Now!`,
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
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <Helmet>
                <title>Blood Bond | All User </title>
            </Helmet>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">

                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Avater
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>



                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Role
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
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
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                {donor.name
                                }
                            </th>

                            <td className="px-6 py-4"><img className="w-12" src={donor.photo} alt="" /></td>
                            <td className="px-6 py-4">{donor.email}</td>

                            <td>
                                {
                                    donor.status === 'blocked' && <p>Blocked</p>
                                }
                                {
                                    donor.status === 'active' && <p>Active</p>
                                }
                            </td>
                            <td className="px-6 py-4">

                                {
                                    donor.role === 'admin' && <p>Admin</p>

                                }

                                {
                                    donor.role === 'voluenteer' && <p>Voluenteer</p>

                                }

                                {
                                    donor.role === 'user' && <button

                                        className="btn btn-ghost btn-lg">
                                        <FaUser className="text-red-600"></FaUser>
                                    </button>
                                }


                            </td>
                            <td>
                                <div className="dropdown">
                                    <div tabIndex={0} role="button" className="lg:ml-10" ><BsThreeDotsVertical /> </div>
                                    <ul className="dropdown-content z-[1] gap-3 menu  shadow bg-base-100 rounded-box w-32">
                                        <button className="p-1 rounded-lg bg-redclr text-black hover:text-white" onClick={() => handleAdmin(donor)}>Admin</button>
                                        <button className="p-1 rounded-lg bg-redclr text-black hover:text-white" onClick={() => handleUser(donor)}>User</button>
                                        <button className="p-1 rounded-lg bg-redclr text-black hover:text-white" onClick={() => handleVoluenteer(donor)}>Voluenteer</button>
                                        <button className="p-1 rounded-lg bg-redclr text-black hover:text-white" onClick={() => handleBlocked(donor)}>Blocked</button>
                                        <button className="p-1 rounded-lg bg-redclr text-black hover:text-white" onClick={() => handleActive(donor)}>Active</button>
                                    </ul>
                                </div>
                            </td>
                            <button
                                onClick={() => handleDeleteUser(donor)}
                                className="btn btn-ghost btn-lg">
                                <FaTrashAlt className="text-red-600"></FaTrashAlt>
                            </button>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllUser;