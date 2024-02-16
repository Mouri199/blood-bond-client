import { Link, NavLink } from "react-router-dom";

import img from '../../assets/Blood Donation Logo.png'
import useAuth from "../Hook/useAuth";
import {  FaHome } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";

import { MdDashboard } from "react-icons/md";
import { IoMdContact } from "react-icons/io";


const Navbar = () => {
    const { user, logoutUser } = useAuth()


    const handleLogOut = () => {
        logoutUser()
            .then(() => console.log("You logged out successfully"))
            .catch(error => console.error(error))
    }

    return (

        <>


            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full flex justify-around h-[80px] navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <div className="">
                            <Link to="/"> <img data-aos="zoom-out-left" className="h-[120px] mx-4" src={img} alt="" /></Link>
                        </div>


                        <div className="flex-none hidden lg:block">

                            <ul className="menu gap-10 text-2xl font-semibold menu-horizontal">

                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/donationrequest">Donation Requests</NavLink>
                                <NavLink to="/blog">Blog</NavLink>

                                <NavLink to="/dashboard">Dashboard</NavLink>
                                <NavLink to="fund">Funding</NavLink>
                                <NavLink to="/contactus">Contact Us</NavLink>
                            </ul>
                        </div>

                        <div className="flex ">
                            {user ?
                                <>

                                    <div className="flex gap-5 items-center">
                                        <img className="rounded-full w-7 lg:w-14" src={user.photoURL}
                                            alt="" />
                                        <p className="lg:text-2xl lg:block hidden font-medium" >
                                            <span>{user.displayName}</span>
                                        </p>
                                        <li className="lg:p-2 p-1 mr-2 lg:text-xl text-sm rounded-lg bg-red text-white hover:bg-hoverclr bg-redclr lg:block">
                                            <NavLink onClick={handleLogOut}> Log Out</NavLink>
                                        </li>
                                    </div>
                                </>
                                : <NavLink to='/login ' className={"lg:p-2 p-1 mr-2 lg:text-xl text-sm rounded-lg bg-red text-white hover:bg-hoverclr bg-redclr lg:block"}>
                                    Login</NavLink>}
                        </div>

                    </div>

                </div>
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  min-h-full bg-base-200">

                        <NavLink className='flex items-center gap-2' to="/">
                            <FaHome></FaHome>Home</NavLink>

                        <NavLink className='flex items-center gap-2' to="/blog">
                            <IoIosCreate />
                            Blog</NavLink>
                        <NavLink className='flex items-center gap-2' to="/dashboard">

                            <MdDashboard />Dashboard</NavLink>
                        <NavLink className='flex items-center gap-2' to="fund">
                            <FaDollarSign />
                            Funding</NavLink>
                        <NavLink className='flex items-center gap-2' to="/contactus">
                            <IoMdContact></IoMdContact>Contact Us</NavLink>
                        <br />
                        <hr />
                        <br />
                        {/* {isAdmin ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminuser">
                                        <FaHome></FaHome>
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/admincreatedonation">
                                        <IoIosCreate />
                                        Create Donation Request
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/users">
                                        <FaUsers></FaUsers>
                                        All Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/alluserdonation'>
                                        <FaCodePullRequest></FaCodePullRequest>
                                        Users Donation Request
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/donationReq">
                                        <FaCodePullRequest></FaCodePullRequest>
                                        Donation Request
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/contentmanagement/addblog">
                                        <FaCodePullRequest></FaCodePullRequest>
                                        Content Management
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/draft">
                                        <FaCodePullRequest></FaCodePullRequest>
                                        Drafts
                                    </NavLink>
                                </li>
                            </>
                        ) : isVolunteer ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard/voluenteerhome">
                                        <FaHome></FaHome>
                                        Voluenteer Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/donationReq">
                                        <FaCodePullRequest></FaCodePullRequest>
                                        Donation Request
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/contentmanagement/addblog">
                                        <FaCodePullRequest></FaCodePullRequest>
                                        Content Management
                                    </NavLink>
                                </li>


                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/">
                                        <FaHome></FaHome>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/userprofile">
                                        <FaHome></FaHome>
                                        User Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/mydonation">
                                        <FaCalendar></FaCalendar>
                                        My Donation Request
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/createdonation">
                                        <IoIosCreate />
                                        Create Donation Request
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/donationReq">
                                        <FaCodePullRequest></FaCodePullRequest>
                                        Donation Request
                                    </NavLink>
                                </li>
                            </>
                        )} */}
                    </ul>


                </div>

            </div>

        </>
    );
};

export default Navbar;