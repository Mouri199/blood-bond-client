
import { Link } from 'react-router-dom';
import useAdmin from '../../Hook/useAdmin';
import useVoluenteer from '../../Hook/useVoluenteer';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Blogs = ({ blogs }) => {
    const { title, img, content, _id } = blogs || {}
    const [isAdmin, refetch] = useAdmin()
    const [isVoluenteer] = useVoluenteer()

    console.log(blogs);

    const axiosSecure = useAxiosSecure()
    const {
        register,
        handleSubmit,

    } = useForm()


    const setUpdate = (id) => {
        axios.put(`http://localhost:8000/blogsUpdate/${id}`)
            .then((res) => {
                console.log(res);
                // updateDonorStatus(id, "Cancelled");
            })
            .catch((error) => console.error("Error updating status:", error))
        // .finally(() => setLoading(false));
    };

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

                axiosSecure.delete(`/blogs/${blog._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Blog has been deleted.",
                                icon: "success"
                            });
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
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>

                    {
                        isAdmin ?
                            (<div className='flex justify-between'>
                                <div>
                                    <Link to={`/blogDetails/${_id}`} href="#" className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white bg-redclr rounded-lg hover:bg-hoverclr focus:ring-4 focus:outline-none ">
                                        Read more
                                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className=''>
                                    <button className="inline-flex items-center mr-3  px-3 py-2 text-sm font-medium text-center text-white bg-redclr rounded-lg hover:bg-hoverclr focus:ring-4 focus:outline-none " onClick={() => document.getElementById('my_modal_1').showModal()}>Edit</button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <form onSubmit={handleSubmit(onsubmit)}>

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
                                                <input type="submit" onClick={() => setUpdate(blogs)} value="Add Blog" className="btn bg-redclr mx-auto  hover:bg-hoverclr w-full my-10" />
                                            </form>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>




                                    <button onClick={() => handleDeleteBlog(blogs)} className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white bg-redclr rounded-lg hover:bg-hoverclr focus:ring-4 focus:outline-none ">Delete</button>
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

export default Blogs;