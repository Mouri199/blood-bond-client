
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hook/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hook/useAxiosPublic";


const AdminCreateDonation = () => {

    const { user } = useAuth()
    const [districts, setDistricts] = useState([]);
    const [upazilas, setUpazilas] = useState([]);
    const axiosPublic = useAxiosPublic()


    useEffect(() => {
        // Fetch district data
        fetch('https://blood-bond-server.vercel.app/district')
            .then(response => response.json())
            .then(data => setDistricts(data))
            .catch(error => console.error('Error fetching district data:', error));
    }, []);

    useEffect(() => {
        // Fetch upazila data
        fetch('https://blood-bond-server.vercel.app/upozela')
            .then(response => response.json())
            .then(data => setUpazilas(data))
            .catch(error => console.error('Error fetching upazila data:', error));
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm()
    const onSubmit = data => {
        console.log(data)
        axiosPublic.post("https://blood-bond-server.vercel.app/bloodDonor", data)
            .then(res => {
                if (res.data.insertedId)
                    Swal.fire(" ", "Donation Request added successfully!", "success")
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
        <>
            <Helmet>
                <title>Blood Bond | Create Donation Request </title>
            </Helmet>
            <div className="bg-[#F4F3F0] p-24">
                <h1 className="text-3xl font-extrabold">Create Donation Request</h1>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex gap-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recipient Name</span>
                            </label>
                            <label>
                                <input type="text" name="photo" {...register("recipientname")} placeholder="Recipient Name" className="input input-bordered w-full" />
                                {errors.registername && <span>Recipient Name is required</span>}
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Blood Group</span>
                            </label>
                            <select className="select md:w-[480px] lg:w-[715px] h-[50px] select-bordered " {...register("bloodgroup")}>
                                {errors.bloodgroup && <span className='text-red-800'>Blood Group is required</span>}
                                <option disabled selected>choose blood group</option>
                                <option value="a+">A+</option>
                                <option value="a-">A-</option>
                                <option value="b+">B+</option>
                                <option value="b-">B-</option>
                                <option value="ab+">AB+</option>
                                <option value="ab-">AB-</option>
                                <option value="o+">O-</option>
                                <option value="o-">O-</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Requester Name</span>
                            </label>

                            <label>

                                <input type="text"  name="name" {...register("requestername")} placeholder="Requester Name" className="input  input-bordered w-full" />
                                {errors.requestername && <span>Requester Name is required</span>}
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Requester Email</span>
                            </label>
                            <label>
                                <input type="text"  name="chef" {...register("email")} placeholder="Requester Email" className="input input-bordered w-full" />
                                {errors.email && <span>Requester Email is required</span>}
                            </label>
                        </div>
                    </div>


                    <div className="flex gap-10">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Recipient Upazila</span>
                            </label>
                            <select
                                className="select md:w-[480px] lg:w-[715px] h-[50px] select-bordered"
                                {...register("recipientupazila", { required: true })}
                            >
                                <option disabled selected>Recipient upazila</option>
                                {upazilas.map(upazila => (
                                    <option key={upazila.id} value={upazila.name}>
                                        {upazila.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Recipient District</span>
                            </label>
                            <select
                                className="select md:w-[480px] lg:w-[715px] h-[50px] select-bordered"
                                {...register("recipientdistrict", { required: true })}
                            >
                                <option disabled selected>Recipient district</option>
                                {districts.map(district => (
                                    <option key={district.id} value={district.name}>
                                        {district.name}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>

                    <div className="flex gap-10">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Full Address</span>
                            </label>
                            <label>
                                <input type="text" name="category"{...register("fulladdress")} placeholder="Full Address" className="input input-bordered w-full" />
                                {errors.fulladdress && <span>Full Address is required</span>}
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Hospital Name</span>
                            </label>
                            <label>
                                <input type="text" name="details" {...register("hospitalname")} placeholder="Hospital Name" className="input input-bordered w-full" />
                                {errors.hospitalname && <span>Hospital Name is required</span>}
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Donation Date</span>
                            </label>
                            <label>
                                <input type="date" name="category" {...register("donationdate")} placeholder="Donation Date" className="input input-bordered w-full" />
                                {errors.donationdate && <span>Donation Date is required</span>}
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Donation Time</span>
                            </label>
                            <label>
                                <input type="time" name="details" {...register("donationtime")} placeholder="Donation Time" className="input input-bordered w-full" />
                                {errors.donationtime && <span>Donation Time is required</span>}
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Submit" className="btn bg-redclr hover:bg-hoverclr w-[200px]" />
                </form>

            </div>
        </>
    );
};

export default AdminCreateDonation;