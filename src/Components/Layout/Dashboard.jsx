import { FaAd, FaAddressCard, FaAdn, FaCreativeCommons, FaDonate, FaHome } from "react-icons/fa";
import { FaPadlet } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
             <div className="flex gap-10">
                {/* side bar */}
                <div className="w-64 min-h-full bg-orange-500">
                    <h1 className="text-xl font-extrabold text-center mt-5">PET ADOPTION</h1>
                    <h2 className="text-xl font-bold text-center mb-10">D O N A T I O N</h2>
                    <ul className="menu h-screen space-y-2 ">
                        <li><NavLink to="/">
                           <FaHome></FaHome>Home</NavLink></li>

                        <li><NavLink to="/dashboard/addPet">
                           <FaAd></FaAd> Add a Cart</NavLink></li>

                        <li><NavLink to="/dashboard/myAddedPets">
                           <FaPadlet></FaPadlet> My added pets</NavLink></li>

                        <li><NavLink to="/dashboard/adoptionRequest">
                           <FaAdn></FaAdn> Adoption Request</NavLink></li>

                        <li><NavLink to="/dashboard/createDonation">
                           <FaCreativeCommons></FaCreativeCommons>Create Donation Campaign</NavLink></li>

                        <li><NavLink to="/dashboard/myDonationCampaigns">
                           <FaAddressCard></FaAddressCard> My Donation Campaigns</NavLink></li>
                            
                        <li><NavLink to="/dashboard/myDonations">
                           <FaDonate></FaDonate>My Donations</NavLink></li>
                    </ul>
                </div>
                
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;