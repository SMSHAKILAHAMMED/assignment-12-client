import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { useParams } from "react-router-dom";


const ViewDetails = () => {
    const [pet, Setart] = useState({});
    const { _id } = useParams()

    useEffect(() => {
        fetch('http://localhost:5000/pet')
            .then(res => res.json())
            .then(data => {
                const avarage = data.find(item => item._id == _id)
                Setart(avarage)
            })
    }, [_id])
    console.log(pet.location);

    const { name, age, category, location, long, short, date, time, image } = pet;
    return (
        <div>
            <Helmet>
                <title>Pet Adoption | ViewDetails</title>
            </Helmet>
            <div className="container mx-auto mt-5">
                <div className="card card-side bg-base-100 border-2 rounded-lg shadow-lg">
                    <figure><img className="p-4 h-full w-[700px] rounded-badge" src={image} alt="Movie" /></figure>
                    <div className="card-body space-y-6 mt-3 h-full w-[700px]">
                        <h1 className="text-2xl font-extrabold">Pet Name : {name}</h1>
                        <h2 className="card-title font-bold"> Pet age : {age}</h2>
                        <div>
                            <p className="text-lg font-medium"> Pet location : {location}</p>
                        </div>
                        <h2 className="text-xl font-mediam"> Category : {category}</h2>
                        <p className="font-light">Short Description : {short}</p>
                        <p className="font-light">Long Description : {long}</p>
                        <div className="flex">
                            <p className="flex items-center gap-1 font-medium"><MdOutlineDateRange /> Date : {date}</p>
                            <p className="flex items-center gap-1 font-medium"><IoMdTimer /> Time : {time}</p>
                        </div>

                        <div className="card-actions justify-end">
                            <div className="flex justify-center">
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn btn-primary rounded-xl mt-10" onClick={() => document.getElementById('my_modal_1').showModal()}>Adopt</button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="text-center space-y-5 bg-white text-black p-5 rounded-lg">
                                        <div className="modal-">
                                            <h2 className="text-2xl font-bold ">Pet Details..</h2>
                                            <img className="mx-auto border h-20 w-20 rounded-lg mt-5" src="" alt="image" />
                                        </div>
                                        <form>
                                            {/* Name & Email row */}
                                            <div className="flex gap-5">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Name</span>
                                                    </label>
                                                    <input type="name" placeholder="name" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Email</span>
                                                    </label>
                                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                                </div>
                                            </div>
                                            {/* Phone & Address row */}
                                            <div className="flex gap-5">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Phone Number</span>
                                                    </label>
                                                    <input type="phone" placeholder="phone number" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Address</span>
                                                    </label>
                                                    <input type="address" placeholder="address" className="input input-bordered" required />
                                                </div>
                                            </div>
                                            <button className="btn btn-primary mt-6">Submit</button>
                                        </form>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;