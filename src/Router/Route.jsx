import {
  createBrowserRouter
} from "react-router-dom";
import MainBody from "../Components/MainBody/MainBody";
import Home from "../Components/HomePage/Home/Home";
import Login from "../Components/Login/Login";
import Blog from "../Components/HomePage/Blog/Blog";
import Register from "../Components/Register/Register";
import Funding from "../Components/HomePage/Funding/Funding";
import Dashboard from "../Components/HomePage/Dashboard/Dashboard";
import ContactUs from "../Components/HomePage/ContactUs/ContactUs";
import BlogDetails from "../Components/HomePage/Blog/BlogDetails";
import MyDonation from "../Components/HomePage/Dashboard/MyDonation/MyDonation";
import CreateDonation from "../Components/HomePage/Dashboard/CreateDonation/CreateDonation";
import UserProfile from "../Components/HomePage/Dashboard/UserProfile/UserProfile";
import DonationRequest from "../Components/DonationRequest/DonationRequest";
import AvailableDonor from "../Components/HomePage/Dashboard/AvailableDonor/AvailableDonor";
import AllUser from "../Components/HomePage/Dashboard/AllUser/AllUser";
import UserDonationRequest from "../Components/HomePage/Dashboard/UsersDonationRequest/UserDonationRequest";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import AdminCreateDonation from "../Components/HomePage/Dashboard/AdminCreateDonation/AdminCreateDonation";
import AdminUser from "../Components/AdminUser/AdminUser";
import WelcomeDashboard from "../Components/HomePage/Dashboard/WelcomeDashboard/WelcomeDashboard";
import ContentManagement from "../Components/HomePage/Dashboard/ContentManagement/ContentManagement";
import VoluenteerHome from "../Components/HomePage/Dashboard/VoluenteerHome.jsx/VoluenteerHome";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainBody></MainBody>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/fund',
        element: <Funding></Funding>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/contactus',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/donationrequest',
        element: <DonationRequest></DonationRequest>
      },

      {
        path: '/availabledonor/:id',
        element: <PrivateRoute><AvailableDonor></AvailableDonor></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:8000/bloodDonor/${params.id}`)
      },
      {
        path: '/blogDetails/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`http://localhost:8000/blogDetails/${params.id}`)
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/userprofile',
        element: <UserProfile></UserProfile>
      },
      {
        path: '/dashboard/welcome',
        element: <WelcomeDashboard></WelcomeDashboard>
      },
      {
        path: '/dashboard/mydonation',
        element: <MyDonation></MyDonation>
      },
      {
        path: '/dashboard/createdonation',
        element: <CreateDonation></CreateDonation>
      },
      {
        path: '/dashboard/donationreq',
        element: <DonationRequest></DonationRequest>
      },
      {
        path: '/dashboard/contentmanagement/addblog',
        element: <ContentManagement></ContentManagement>
      },

      // admin route
      {
        path: '/dashboard/users',
        element: <AllUser></AllUser>
      },
      {
        path: '/dashboard/alluserdonation',
        element: <UserDonationRequest></UserDonationRequest>
      },
      {
        path: '/dashboard/admincreatedonation',
        element: <AdminCreateDonation></AdminCreateDonation>
      },
      {
        path: '/dashboard/adminuser',
        element: <AdminUser></AdminUser>
      },
      {
        path: '/dashboard/voluenteerhome',
        element: <VoluenteerHome></VoluenteerHome>
      }

    ]
  }
]);