import { IoMdTimer } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const DonationCard = ({ donations }) => {

    const { _id, name, amount, long, short, date, time, image } = donations;

    return (
        <div>
            <div className="card h-full lg:w-full card-side border-2 bg-base-100 shadow-xl">
                <figure><img className="h-[350px] lg:w-64 md:ml-2 rounded-lg" src={image} alt="Movie" /></figure>
                <div className="card-body lg:h- lg:w-72">
                    <h2 className="card-title text-2xl font-bold">Pet Name : {name}</h2>
                    <p className="text-xl font-medium">Amount : {amount}</p>
                    <p>Short Description : {short}</p>
                    <p>Long Description : {long}</p>
                    <div className="flex">
                        <p className="flex items-center"><MdOutlineDateRange /> Date : {date}</p>
                        <p className="flex items-center"><IoMdTimer /> Time : {time}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="card-actions justify-center">
                            <Link to={`/petDetails/${_id}`}> <button className="btn btn-outline mt-3 px-24 mr-4">View Details</button> </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;