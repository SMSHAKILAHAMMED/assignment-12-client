import { IoMdTimer } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

const AllCard = ({ pets }) => {

    const { _id, name, age, category, location, long, short, date, time, image } = pets;

    return (
        <div >
            <div className="card h-full w-96 border-2 bg-base-100 shadow-xl ">
                <figure><img className="mt-5 rounded-badge h-64 w-80" src={image} alt="image" /></figure>
                <div className="card-body">
                    <h1 className="text-2xl font-extrabold">Pet Name : {name}</h1>
                    <h2 className="card-title font-bold"> Pet age : {age}</h2>
                    <div>
                        <p className="text-lg font-medium"> Pet location : {location}</p>
                    </div>
                    <h2 className="text-xl font-mediam"> Category : {category}</h2>
                    <p className="font-light">Short Description : {short}</p>
                    <p className="font-light">Long Description : {long}</p>
                    <div className="flex justify-between">
                        <p className="flex items-center gap-1 font-"><MdOutlineDateRange /> Date : {date}</p>
                        <p className="flex items-center gap-1 font-"><IoMdTimer /> Time : {time}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/viewDetails/${_id}`} className="btn btn-outline btn-accent w-full">ViewDetails</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCard;