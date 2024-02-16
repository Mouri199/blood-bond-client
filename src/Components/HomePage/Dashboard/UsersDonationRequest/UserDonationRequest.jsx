import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAdmin from "../../../Hook/useAdmin";
import axios from "axios";


const UserDonationRequest = () => {
    const [donors, setDonors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdmin] = useAdmin()
    const [disabledButtons, setDisabledButtons] = useState([]);


    const updateDonorStatus = (id, newStatus) => {
        setDonors(prevDonors =>
            prevDonors.map(donor =>
                donor._id === id ? { ...donor, status: newStatus } : donor
            )
        );
    };


    const setInprogress = (id) => {
        if (!disabledButtons.includes(`inprogress_${id}`)) {
            setDisabledButtons((prevButtons) => [...prevButtons, `inprogress_${id}`]);

            axios
                .put(`https://blood-bond-server.vercel.app/InprogressCreateDonor/${id}`)
                .then((res) => {
                    console.log(res);
                    updateDonorStatus(id, "In Progress");
                })
                .catch((error) => console.error("Error updating status:", error))
                .finally(() => setLoading(false));
        }
    };
    const setDone = (id) => {
        if (!disabledButtons.includes(`done_${id}`)) {
            setDisabledButtons((prevButtons) => [...prevButtons, `done_${id}`]);

            axios
                .put(`https://blood-bond-server.vercel.app/doneCreateDonor/${id}`)
                .then((res) => {
                    console.log(res);
                    updateDonorStatus(id, "Done");
                })
                .catch((error) => console.error("Error updating status:", error))
                .finally(() => setLoading(false));
        }
    };

    const setCancel = (id) => {
        if (!disabledButtons.includes(`cancel_${id}`)) {
            setDisabledButtons((prevButtons) => [...prevButtons, `cancel_${id}`]);

            axios
                .put(`https://blood-bond-server.vercel.app/cancelCreateDonor/${id}`)
                .then((res) => {
                    console.log(res);
                    updateDonorStatus(id, "Cancel");

                })
                .catch((error) => console.error("Error updating status:", error))
                .finally(() => setLoading(false));
        }
    };
    const setPending = (id) => {
        if (!disabledButtons.includes(`pending_${id}`)) {
            setDisabledButtons((prevButtons) => [...prevButtons, `pending_${id}`]);

            axios
                .put(`https://blood-bond-server.vercel.app/pendingCreateDonor/${id}`)
                .then((res) => {
                    console.log(res);
                    updateDonorStatus(id, "Pending");
                })
                .catch((error) => console.error("Error updating status:", error))
                .finally(() => setLoading(false));
        }
    };

    useEffect(() => {

        fetch(`https://blood-bond-server.vercel.app/recentDonor`)
            .then((response) => response.json())
            .then((data) => setDonors(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return (
        <div>
            <Helmet>
                <title>Blood Bond | User Donation Request </title>
            </Helmet>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>

                            <th scope="col" className="px-6 py-3">
                                Requester Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Recipient Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Blood Group
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Donation date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Donation time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Recipient District
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Recipient Upazila
                            </th>
                            <th scope="col" className="px-6 py-3">
                                status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {donors.map((donor) => (
                            <tr
                                key={donor.id} // replace 'id' with the actual key in your donor data
                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                            >
                                <td className="px-6 py-4">{donor.email}</td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {donor.recipientname
                                    }
                                </th>

                                <td className="px-6 py-4">{donor.bloodgroup}</td>
                                <td className="px-6 py-4">{donor.donationdate}</td>
                                <td className="px-6 py-4">{donor.donationtime}</td>
                                <td className="px-6 py-4">{donor.recipientdistrict}</td>
                                <td className="px-6 py-4">{donor.recipientupazila}</td>
                                <td className="px-6 py-4">
                                    <details>
                                        <summary className="">{donor.status}</summary>
                                        <ul className=" shadow menu bg-base-100">
                                            {isAdmin ? (
                                                <>
                                                    <button className="disabled:text-red-400" disabled={disabledButtons.includes(`inprogress_${donor._id}`)} onClick={() => setInprogress(donor._id)}><a>Inprogress</a></button>
                                                    <button className="disabled:text-red-400" disabled={disabledButtons.includes(`done_${donor._id}`)} onClick={() => setDone(donor._id)}><a>Done</a></button>
                                                    <button className="disabled:text-red-400" disabled={disabledButtons.includes(`cancel_${donor._id}`)} onClick={() => setCancel(donor._id)}><a>Cancel</a></button>
                                                    <button className="disabled:text-red-400" disabled={disabledButtons.includes(`pending_${donor._id}`)} onClick={() => setPending(donor._id)}><a>Pending</a></button>
                                                </>
                                            ) : (
                                                <> <button onClick={() => setInprogress(donor._id)}><a>Inprogress</a></button>
                                                    <button onClick={() => setDone(donor._id)}><a>Done</a></button>
                                                    <button onClick={() => setCancel(donor._id)}><a>Cancel</a></button></>
                                            )}

                                        </ul>
                                    </details>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserDonationRequest;