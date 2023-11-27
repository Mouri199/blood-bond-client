import { Link, NavLink } from "react-router-dom";

import img from '../../assets/Blood Donation Logo.png'
import useAuth from "../Hook/useAuth";


const Navbar = () => {
    const { user, logoutUser } = useAuth()

    const handleLogOut = () => {
        logoutUser()
            .then(() => console.log("You logged out successfully"))
            .catch(error => console.error(error))
    }

    return (

        <>
            <div className=" bg-background">
                <div className=" nav-start flex justify-evenly items-center">
                    <div className="dropdown flex items-center ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-56 z-[1] p-2 shadow bg-background text-center text-lg text-white rounded-box w-52">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/donationrequest">Donation Requests</NavLink>
                            <NavLink to="/blog">Blog</NavLink>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                            <NavLink to="fund">Funding</NavLink>
                            <NavLink to="/contactus">Contact Us</NavLink>
                        </ul>
                        <div className="lg:hidden">
                            <Link to="/"> <img data-aos="zoom-out-left" className="h-[120px] mx-4" src={img} alt="" /></Link>
                        </div>
                    </div>









                    <div className="lg:flex  lg:justify-around hidden mx-8 items-center">


                        <nav>
                            <ul className="lg:flex md:flex hidden lg:sticky mr-9 text-2xl font-semibold gap-7">
                                <li className="hover:underline hover:text-white">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="hover:underline hover:text-white">
                                    <NavLink to="/donationrequest">

                                        Donation Request</NavLink>
                                </li>
                                <li className="hover:underline hover:text-white" >
                                    <NavLink to="/Blog"> Blog </NavLink> </li>
                            </ul>

                        </nav>
                        <div>
                            <Link to="/"> <img data-aos="zoom-out-left" className="h-[120px] mx-4" src={img} alt="" /></Link>
                        </div>
                        <nav>
                            <ul className={`lg:flex md:flex hidden lg:sticky mr-9 text-2xl font-semibold gap-7 ${open ? " " : "hidden"}`}>

                                {user ? (
                                    <li className="hover:underline hover:text-white">
                                        <NavLink to="/dashboard">Dashboard</NavLink>
                                    </li>
                                ) : null}


                                <li className="hover:underline hover:text-white">
                                    <NavLink to="/fund">Funding</NavLink>
                                </li>
                                <li className="hover:underline hover:text-white">
                                    <NavLink to="/contactus">Contact Us</NavLink>
                                </li>
                            </ul>
                        </nav>

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


                <div>

                </div>





            </div >



        </>
    );
};

export default Navbar;