import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";


const DonationRequest = () => {
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
                .put(`https://blood-bond-server.vercel.app/inprogressBloodDonor/${id}`)
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
                .put(`https://blood-bond-server.vercel.app/doneBloodDonor/${id}`)
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
                .put(`https://blood-bond-server.vercel.app/cancelBloodDonor/${id}`)
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
                .put(`https://blood-bond-server.vercel.app/pendingBloodDonor/${id}`)
                .then((res) => {
                    console.log(res);
                    updateDonorStatus(id, "Pending");
                })
                .catch((error) => console.error("Error updating status:", error))
                .finally(() => setLoading(false));
        }
    };



    useEffect(() => {
        fetch("https://blood-bond-server.vercel.app/bloodDonor")
            .then((response) => response.json())
            .then((data) => setDonors(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <div>
                <Helmet>
                    <title>Blood Bond | Donation Request </title>
                </Helmet>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Requester name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    time
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    location
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    status
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {donors.map((donor) => (
                                <tr
                                    key={donor._id}
                                    className="odd:bg-white  even:bg-gray-50  border-b "
                                >
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        {donor.requestername}
                                    </th>
                                    <td className="px-6 py-4">{donor.donationdate}</td>
                                    <td className="px-6 py-4">{donor.donationtime}</td>
                                    <td className="px-6 py-4">{donor.recipientdistrict}</td>
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
                                    <td>
                                        <Link to={`/availabledonor/${donor._id}`}>
                                            <button>View Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DonationRequest;
