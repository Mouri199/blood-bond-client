
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const AvailableDonor = () => {

    const donorDetails = useLoaderData();
    const { requestername, email, recipientname, bloodgroup, donationdate, donationtime, recipientdistrict, recipientupazila } = donorDetails


    return (
        <div>
            <Helmet>
                <title>Blood Bond | Available Donation </title>
            </Helmet>


            {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Requester name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Recipient name
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

                        <tr

                            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                        >
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {requestername
                                }
                            </th>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {recipientname
                                }
                            </th>
                            <td className="px-6 py-4">{bloodgroup}</td>
                            <td className="px-6 py-4">{donationdate}</td>
                            <td className="px-6 py-4">{donationtime}</td>
                            <td className="px-6 py-4">{recipientdistrict}</td>
                            <td className="px-6 py-4">{recipientupazila}</td>
                            <td className="px-6 py-4">
                                <details>
                                    <summary className="">Pending</summary>
                                    <ul className=" shadow menu bg-base-100">
                                        <li><a>Inprogress</a></li>
                                        <li><a>Done</a></li>
                                        <li><a>Cancel</a></li>

                                    </ul>
                                </details>

                            </td>
                        </tr>

                    </tbody>
                </table>
            </div> */}
            <div className="lg:w-[1000px] max-w-[1200px] mx-auto">
                <div className="lg:flex justify-between items-end px-10 lg:px-20">
                    <div className="lg:flex items-center lg:gap-10">
                        <img className="lg:w-[200px] w-[100px]" src="https://i.ibb.co/nDr0SC0/profile.png" alt="" />
                        <h3 className="lg:text-3xl font-bold">{requestername}</h3>
                    </div>
                    {/* <div className="flex items-center gap-3">
                        <FaBell className="lg:block hidden" />
                        <button className="bg-redclr text-lg rounded-lg lg:p-1">Edit Profile</button>
                    </div> */}
                </div>

                <div>



                    <div className="relative overflow-x-auto">
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
                                        {recipientname}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Email
                                    </th>
                                    <td className="px-6 py-4">
                                        {email}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        District
                                    </th>
                                    <td className="px-6 py-4">
                                        {recipientdistrict}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Upazila
                                    </th>
                                    <td className="px-6 py-4">
                                        {recipientupazila}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Blood Group
                                    </th>
                                    <td className="px-6 py-4">
                                        {bloodgroup}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Donation Time
                                    </th>
                                    <td className="px-6 py-4">
                                        {donationtime}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Donation Date
                                    </th>
                                    <td className="px-6 py-4">
                                        {donationdate}
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default AvailableDonor;