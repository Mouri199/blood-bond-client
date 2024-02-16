
import { Link } from 'react-router-dom';
// import useAdmin from '../../Hook/useAdmin';
// import useVoluenteer from '../../Hook/useVoluenteer';
// import useAxiosSecure from '../../Hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAdmin from '../../../Hook/useAdmin';
import useVoluenteer from '../../../Hook/useVoluenteer';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import useBlog from '../../../Hook/useBlog';




const Draft = ({ blogPublish }) => {
    const [blog, blogRefetch] = useBlog()
    const { title, img, content, _id } = blogPublish || {}
    const [isAdmin, refetch] = useAdmin()
    const [isVoluenteer] = useVoluenteer()
    const axiosSecure = useAxiosSecure()

    console.log(blogPublish);
    const {
        register,
        handleSubmit
    } = useForm()


    const onSubmit = async (data) => {
        console.log(data);
        const formData = {
            img: data.img,
            title: data.title,
            content: data.content
        }
        await axios.put(`https://blood-bond-server.vercel.app/blogsUpdate/${data.id}`, formData)
            .then((res) => {
                console.log(res);
                blogRefetch()
            })
            .catch((error) => console.error("Error updating status:", error))


    };

    const handlePublish = data => {
        console.log(data)
        axiosSecure.post("https://blood-bond-server.vercel.app/blogs", data)
            .then(res => {
                if (res.data.insertedId)

                    Swal.fire(" ", "Blog published successfully!", "success")
                axiosSecure.delete(`/blogPublish/${data._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()


                        }
                    })

            })
            .catch(error => {
                if (error) {
                    Swal.fire("", "Something went wrong!", "error")

                }
            })
    }

    const handleDeleteBlog = blog => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/blogPublish/${blog._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Blog has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="lg:w-[600px] lg:h-[700px] lg:mx-0 mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg lg:h-[300px]  h-[200px] w-[600px] lg:w-[600px]" src={img} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>

                    {
                        isAdmin ?
                            (<div className='flex justify-between'>

                                <div className='flex'>
                                    <button className="inline-flex items-center lg:mr-3 mr-1 px-3 py-2 text-sm font-medium text-center text-white bg-redclr rounded-lg hover:bg-hoverclr focus:ring-4 focus:outline-none " onClick={() => document.getElementById('my_modal_1').showModal()}>Edit</button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <form onSubmit={handleSubmit(onSubmit)}>

                                                <div className="flex gap-10 ">
                                                    <div className="form-control w-full">
                                                        <label className="label">
                                                            <span className="label-text">Image</span>
                                                        </label>
                                                        <label>
                                                            <input defaultValue={img} type="text" name="photo" {...register("img")} className="input input-bordered w-full" />
                                                        </label>
                                                    </div>
                                                    <div className="form-control w-full">
                                                        <label className="label">
                                                            <span className="label-text">Title</span>
                                                        </label>
                                                        <label>
                                                            <input type="text" defaultValue={title} name="photo" {...register("title")} className="input input-bordered w-full" />
                                                        </label>
                                                    </div>

                                                </div>
                                                <div className="form-control w-full">
                                                    <label className="label">
                                                        <span className="label-text">Content</span>
                                                    </label>
                                                    <label>
                                                        <input defaultValue={content} type="text" name="photo" {...register("content")} className="input input-bordered w-full" />
                                                    </label>
                                                </div>
                                                <input type="submit" value="Update Blog" className="btn bg-redclr mx-auto  hover:bg-hoverclr w-full my-10" />
                                                <input type="text" name="" value={_id} className='hidden' {...register("id")} id="" />
                                            </form>
                                            <div className="modal-action">

                                                <form method="dialog">

                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>

                                    <button onClick={() => handleDeleteBlog(blogPublish)} className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white bg-redclr rounded-lg hover:bg-hoverclr focus:ring-4 focus:outline-none ">Delete</button>
                                    <button onClick={() => handlePublish(blogPublish)} className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white bg-redclr rounded-lg hover:bg-hoverclr lg:ml-3 ml-1 focus:ring-4 focus:outline-none ">Publish</button>

                                </div>

                            </div>)
                            :
                            isVoluenteer ? (<div className='flex justify-between'>
                                <div>
                                    <Link to={`/blogDetails/${_id}`} href="#" className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white bg-redclr rounded-lg hover:bg-hoverclr focus:ring-4 focus:outline-none ">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className=''>
                                    <button className="inline-flex mr-5 items-center  px-3 py-2 text-sm font-medium text-center text-white bg-redclr rounded-lg hover:bg-hoverclr focus:ring-4 focus:outline-none ">Edit</button>

                                </div>

                            </div>) :
                                <Link to={`/blogDetails/${_id}`} href="#" className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white bg-redclr rounded-lg hover:bg-hoverclr focus:ring-4 focus:outline-none ">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Draft;