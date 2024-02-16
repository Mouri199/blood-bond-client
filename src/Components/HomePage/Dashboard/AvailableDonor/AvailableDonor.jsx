
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


            <div className="lg:w-[1000px] max-w-[1200px] mx-auto">
                <div className="lg:flex justify-between items-end px-10 lg:px-20">
                    <div className="lg:flex items-center lg:gap-10">
                        <img className="lg:w-[200px] w-[100px]" src="https://i.ibb.co/nDr0SC0/profile.png" alt="" />
                        <h3 className="lg:text-3xl font-bold">{requestername}</h3>
                    </div>
             
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
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Full Name
                                    </th>
                                    <td className="px-6 py-4">
                                        {recipientname}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Email
                                    </th>
                                    <td className="px-6 py-4">
                                        {email}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        District
                                    </th>
                                    <td className="px-6 py-4">
                                        {recipientdistrict}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Upazila
                                    </th>
                                    <td className="px-6 py-4">
                                        {recipientupazila}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Blood Group
                                    </th>
                                    <td className="px-6 py-4">
                                        {bloodgroup}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                        Donation Time
                                    </th>
                                    <td className="px-6 py-4">
                                        {donationtime}
                                    </td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
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