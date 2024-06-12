import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoMdTimer } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

const PetDetails = () => {
    const [donation, SetDonation] = useState({});
    const { _id } = useParams()

    useEffect(() => {
        fetch('http://localhost:5000/createDonation')
            .then(res => res.json())
            .then(data => {
                const avarage = data.find(item => item._id == _id)
                SetDonation(avarage)
            })
    }, [_id])
    console.log(donation.location);

    const { name, amount, long, short, date, time, image } = donation;
    return (
        <div>
            <Helmet>
                <title>Pet Adoption | Pet Details</title>
            </Helmet>
            <div className="container mx-auto mt-5">
                <div className="card card-side bg-base-100 border-2 rounded-lg shadow-lg">
                    <figure><img className="p-4 h-[500px] w-[700px] rounded-badge" src={image} alt="Movie" /></figure>
                    <div className="card-body space-y-6 mt-3 h-[400px] w-[700px]">
                        <h1 className="text-2xl font-extrabold">Pet Name : {name}</h1>
                        <h2 className="card-title font-bold"> Amount : {amount}</h2>
                        <div>
                        </div>
                        <p className="font-light">Short Description : {short}</p>
                        <p className="font-light">Long Description : {long}</p>
                        <div className="flex">
                            <p className="flex items-center gap-1 font-medium"><MdOutlineDateRange /> Date : {date}</p>
                            <p className="flex items-center gap-1 font-medium"><IoMdTimer /> Time : {time}</p>
                        </div>
                        <Link to="/" className="btn btn-outline btn-primary lg:ml-80 mt-10"> Go back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;