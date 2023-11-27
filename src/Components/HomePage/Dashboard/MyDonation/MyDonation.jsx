import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hook/useAuth";



const MyDonation = () => {
    const [donors, setDonors] = useState([]);
    const { user } = useAuth()
  


    useEffect(() => {
        fetch(`http://localhost:8000/donorrequest?email=${user?.email}`)
            .then((response) => response.json())
            .then((data) => setDonors(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [user]);
    return (
        <div>
            <Helmet>
                <title>Blood Bond | My Donation Requests </title>
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
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {donor.recipientname
                                    }
                                </th>

                                <td className="px-6 py-4">{donor.bloodgroup}</td>
                                <td className="px-6 py-4">{donor.donationdate}</td>
                                <td className="px-6 py-4">{donor.donationtime}</td>
                                <td className="px-6 py-4">{donor.recipientdistrict}</td>
                                <td className="px-6 py-4">{donor.recipientupazila}</td>
                                <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        Edit
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyDonation;