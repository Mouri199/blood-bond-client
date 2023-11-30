import { useLoaderData } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { LuForward } from "react-icons/lu";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
    const blogDetails = useLoaderData();
    const { title, content, img } = blogDetails

    return (

        <div className="text-gray-600 lg:w-[1000px] mx-auto ">
           <Helmet>
                <title>Blood Bond | Blog Details </title>
            </Helmet>
            <div className="lg:flex gap-8 ">

                <div className="bg-[#F9FAFB] px-5 my-10 lg:py-20  ">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className="rounded-xl h-[200px] lg:h-[300px]" />
                    </figure>
                    <h3 className="lg:text-3xl font-semibold my-4">{title}</h3>
                    <div className=" ">
                        <div className="flex justify-between">
                            <div className="flex items-center gap-3">
                                <IoMdPerson />
                                <p className="lg:text-xl">Deborah Beck</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <LuForward />
                                <p className="lg:text-xl">Environment, Pet & Education</p>
                            </div>
                        </div>
                        <div className="lg:text-start  text-center">
                            <h2 className="lg:text-3xl font-semibold my-3 ">{title}</h2>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>




                <div>
                    <div className="flex my-12 w-full md:justify-start rounded-lg bg-[#F9FAFB] lg:h-[150px] px-5 lg:w-[300px] justify-center items-center">
                        <div className="">
                            <label className=" text-sm lg:text-2xl text-gray-600">Search</label>
                            <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className=" mt-8 text-white bg-redclr border-0 py-2 px-6  hover:bg-hoverclr rounded text-lg">Search</button>
                    </div>
                    <div className="px-5 lg:text-start text-center bg-[#F9FAFB] py-10 lg:w-[300px]">
                        <h3 className="lg:text-3xl font-semibold ">Category</h3>
                        <p className="my-5 lg:text-xl"> Blood Relation </p>
                        <p className="my-5 lg:text-xl"> AB- Blood Donor </p>
                        <p className="my-5 lg:text-xl">  Keep Safe Blood </p>
                        <p className="my-5 lg:text-xl">  Preserve Blood</p>
                        <p className="my-5 lg:text-xl"> Donation Center  </p>
                        <p className="my-5 lg:text-xl">  Proper Education </p>

                    </div>
                </div>


            </div>
        </div >
    );
};

export default BlogDetails;