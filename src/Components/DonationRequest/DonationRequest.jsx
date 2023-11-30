import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAdmin from "../Hook/useAdmin";

const DonationRequest = () => {
    const [donors, setDonors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdmin] =useAdmin()

    const updateDonorStatus = (id, newStatus) => {
        setDonors(prevDonors =>
            prevDonors.map(donor =>
                donor._id === id ? { ...donor, status: newStatus } : donor
            )
        );
    };

    const setCancel = (id) => {
        axios.put(`http://localhost:8000/cancelBloodDonor/${id}`)
            .then((res) => {
                console.log(res);
                updateDonorStatus(id, "Cancelled");
            })
            .catch((error) => console.error("Error updating status:", error))
            .finally(() => setLoading(false));
    };

    const setInprogress = (id) => {
        axios.put(`http://localhost:8000/inprogressBloodDonor/${id}`)
            .then((res) => {
                console.log(res);
                updateDonorStatus(id, "In Progress");
            })
            .catch((error) => console.error("Error updating status:", error));
    };
    const setPending = (id) => {
        axios.put(`http://localhost:8000/pendingBloodDonor/${id}`)
            .then((res) => {
                console.log(res);
                updateDonorStatus(id, "Pending");
            })
            .catch((error) => console.error("Error updating status:", error));
    };

    const setDone = (id) => {
        axios.put(`http://localhost:8000/doneBloodDonor/${id}`)
            .then((res) => {
                console.log(res);
                updateDonorStatus(id, "Done");
            })
            .catch((error) => console.error("Error updating status:", error));
    };

    useEffect(() => {
        fetch("http://localhost:8000/bloodDonor")
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
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                >
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                                        <li onClick={() => setInprogress(donor._id)}><a>Inprogress</a></li>
                                                        <li onClick={() => setDone(donor._id)}><a>Done</a></li>
                                                        <li onClick={() => setCancel(donor._id)}><a>Cancel</a></li>
                                                        <li onClick={() => setPending(donor._id)}><a>Pending</a></li>
                                                    </>
                                                ) : (
                                                    <> <li onClick={() => setInprogress(donor._id)}><a>Inprogress</a></li>
                                                        <li  onClick={() => setDone(donor._id)}><a>Done</a></li>
                                                        <li onClick={() => setCancel(donor._id)}><a>Cancel</a></li></>
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
