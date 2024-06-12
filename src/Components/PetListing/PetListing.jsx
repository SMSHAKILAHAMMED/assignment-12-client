import { useLoaderData } from "react-router-dom";
import AllCard from "../AllCard/AllCard";
import { Helmet } from "react-helmet-async";


const PetListing = () => {
    const petlisting = useLoaderData();
    console.log(petlisting)
    return (
        <div>
            <div className="w-full dark:bg-gray-500">
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10 bg-slate-300">
                    <div className="flex gap-10 lg:ml-20">
                        <div>
                            <h1 className="text-6xl antialiased font-semibold leading-none text-center dark:text-gray-800 mt-10">Pet Listing</h1>
                            <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">Find specific search the pet names
                            with more...
</p>
                            <label className="input input-bordered flex items-center gap-2 w-96">
                                <input type="text" className="grow" placeholder="Search" />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                            </label>
                        </div>
                        <div>
                            <img className="h-72 w-[550px] rounded-lg" src="https://i.ibb.co/qY6bf2j/images-3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:ml-10 lg:mr-10">
                <h1 className="text-3xl text-center font-extrabold mt-5 mb-20">All Pets : {petlisting?.length} </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {
                        petlisting.map(pets => <AllCard key={pets._id} pets={pets}></AllCard>)
                    }
                </div>
            </div>

            <Helmet>
                <title>Pet Adoption | PetListing</title>
            </Helmet>
        </div>
    );
};

export default PetListing;