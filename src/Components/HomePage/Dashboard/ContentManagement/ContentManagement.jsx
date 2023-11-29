import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import Swal from "sweetalert2";

const ContentManagement = () => {
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,
       
    } = useForm()
    const onSubmit = data => {
        console.log(data)
        axiosPublic.post("http://localhost:8000/blogs", data)
            .then(res => {
                if (res.data.insertedId)
                    Swal.fire(" ", "Content Management added successfully!", "success")
                reset();
                // navi('/services')
            })
            .catch(error => {
                if (error) {
                    Swal.fire("", "Something went wrong!", "error")
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="flex gap-10 ">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label>
                            <input type="text" name="photo" {...register("img")}  className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <label>
                            <input type="text" name="photo" {...register("title")}  className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Content</span>
                    </label>
                    <label>
                        <input type="text" name="photo" {...register("content")}  className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Add Blog" className="btn bg-redclr mx-auto  hover:bg-hoverclr w-full my-10" />
            </form>
        </div>
    );
};

export default ContentManagement;