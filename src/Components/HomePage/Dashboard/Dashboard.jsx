import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaEnvelope, FaHome, FaUsers } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { IoIosCreate } from "react-icons/io";
import { FaCodePullRequest } from "react-icons/fa6";

import useAuth from "../../Hook/useAuth";
import useAdmin from "../../Hook/useAdmin";

// import Navbar from "../../Navbar/Navbar";
// import useAdmin from "../../Hook/useAdmin";

const Dashboard = () => {
    const { user } = useAuth()
    // const isAdmin = true
    const [isAdmin] = useAdmin()
    return (
        <div className="flex">
            <Helmet>
                <title>Blood Bond | Dashboard </title>
            </Helmet>
            {/* dashboard side bar */}

            <div className="w-64 lg:min-h-screen  bg-redclr">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/">
                                    <FaHome></FaHome>
                                    Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/adminuser">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/admincreatedonation">
                                    <IoIosCreate />
                                    Create Donation Request </NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/alluserdonation'>
                                    <FaCodePullRequest></FaCodePullRequest>
                                    Users Donation Request</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/donationReq">
                                    <FaCodePullRequest></FaCodePullRequest>
                                    Donation Request </NavLink>
                            </li>


                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/">
                                        <FaHome></FaHome>
                                        Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/userprofile">
                                        <FaHome></FaHome>
                                        User Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/mydonation">
                                        <FaCalendar></FaCalendar>
                                        My Donation Request</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/createdonation">
                                        <IoIosCreate />
                                        Create Donation Request </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/donationReq">
                                        <FaCodePullRequest></FaCodePullRequest>
                                        Donation Request </NavLink>
                                </li>



                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>

                    <li>
                        <NavLink to="/order/contactus">
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>


            </div>

          
            {/* dashboard content */}

            <div >

                <h1 className="flexlg:px-40 justify-center lg:text-3xl font-semibold  py-10">Welcome {user?.displayName} ,Your blood donation saves lives. Thank you for being a hero today!</h1>

                <Outlet />
            </div>



        </div>

    );
};

export default Dashboard;