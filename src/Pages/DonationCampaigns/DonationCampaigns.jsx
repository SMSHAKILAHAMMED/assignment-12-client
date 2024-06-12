import { Helmet } from "react-helmet-async";
import DonationCard from "../../Components/DonationCard/DonationCard";
import { useLoaderData } from "react-router-dom";

const DonationCampigns = () => {
    const donationCampigns = useLoaderData();
    console.log(donationCampigns)
    return (
        <div>
            <Helmet>
                <title>Pet Adoption | DonationCampigns</title>
            </Helmet>

            <div className="lg:ml-10 lg:mr-10">
                <h1 className="text-3xl text-center font-extrabold mt-5 mb-20"> DonationCampigns : {donationCampigns?.length} </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
                    {
                        donationCampigns?.map(donations =>
                            <DonationCard key={donations._id} donations={donations}></DonationCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DonationCampigns;