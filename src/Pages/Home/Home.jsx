import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Pet Adoption | Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
                <Marquee className="container mx-auto mt-10 text-black bg-white border border-black p-3">
                    <Link to="/">Pet adoption is the process of transferring responsibility for a pet that was previously owned by another party. Common sources for adoptable pets are animal shelters, rescue groups, or other pet owners. Some organizations give adopters ownership of the pet, while others use a guardianship model wherein the organization retains some control over the animal's future use or care.

                        Online pet adoption sites have databases, searchable by the public, of pets being housed by thousands of animal shelters and rescue groups.</Link>
                </Marquee>
            </div>


            {/* Card-section */}
            <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
                <div className="container text-center p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center mb-20">
                        <h2 className="text-3xl font-bold">Pets category section</h2>
                        <p className="font-serif text-sm dark:text-gray-600">Common sources for adoptable pets are animal shelters, <br /> rescue groups, or other pet owners. Some organizations give adopters ownership of the pet...</p>
                    </div>
                    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-8 gap-24 ">
                        <div className="max-w-xs hover:scale-110 rounded-md shadow-lg border-2 border-slate-200 dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://i.ibb.co/2hkr3rZ/360-F-97589769-t45-Cq-Xyzjz0-KXwo-BZT9-PRa-WGHRk5h-Qq-Q.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-wide">Category : Cat</h2>

                                </div>

                            </div>
                        </div>
                        <div className="max-w-xs hover:scale-110 rounded-md shadow-lg border-2 border-slate-200 dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://i.ibb.co/FxvvTZ6/taylor-kopel-WX4i1-Jq-o0-Y-unsplash.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-wide">Category : Dog</h2>

                                </div>

                            </div>
                        </div>
                        <div className="max-w-xs hover:scale-110 rounded-md shadow-lg border-2 border-slate-200 dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://i.ibb.co/4pFzy0b/istockphoto-173893247-2048x2048.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-wide">Category : Rabbit</h2>

                                </div>

                            </div>
                        </div>
                        <div className="max-w-xs hover:scale-110 rounded-md shadow-lg border-2 border-slate-200 dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://i.ibb.co/YXvwh8d/istockphoto-1269216880-2048x2048.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-wide">Category : Fish</h2>

                                </div>

                            </div>
                        </div>
                        <div className="max-w-xs hover:scale-110 rounded-md shadow-lg border-2 border-slate-200 dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://i.ibb.co/HxcjWsX/istockphoto-629628952-2048x2048.jpg" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-wide">Category : Monkey</h2>

                                </div>

                            </div>
                        </div>
                        <div className="max-w-xs hover:scale-110 rounded-md shadow-lg border-2 border-slate-200 dark:bg-gray-50 dark:text-gray-800">
                            <img src="https://i.ibb.co/Sm72wD9/unnamed.webp" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-extrabold tracking-wide">Category : Deer</h2>


                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Call to action section */}
            <section>
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold">Call to action section :</h1>
                    <p>“You can't buy love, but you can rescue it.” “Money can buy a fine dog, <br /> but only love can make him wag his tail.” “Do not pity a shelter dog. Adopt one.”</p>
                    <img className="h-[650px] w-[1300px] mt-10" src="https://i.ibb.co/bgQHxsJ/istockphoto-1345314765-2048x2048.jpg" alt="Pet adoption" />

                </div>
            </section>
            {/* About us section */}
            <section>
                <div className="container mx-auto text-center mt-10 space-y-6">
                    <h1 className="text-3xl font-bold ">About us section :</h1>
                    <p>Welcome to our Pet Adoption Platform, your one-stop destination for finding your new furry friend. We are dedicated to connecting loving families with pets in need of a forever home. Our website makes the process of pet adoption easy, transparent, and rewarding for both the adopters and the pets.

                        How It Works
                        Browse Pets: Explore our extensive database of pets available for adoption. You can filter by type, breed, age, size, and more to find the perfect match for your family.
                        Detailed Profiles: Each pet has a detailed profile including their history, temperament, health status, and any special needs they might have.
                        Adoption Application: Once you find a pet you’re interested in, you can fill out an adoption application directly on our website. This helps us ensure the pet is going to a suitable home.
                        Meet & Greet: If your application is approved, we’ll arrange a meet and greet. This can be virtual or in-person, depending on the situation and location.
                        Adoption Finalization: After a successful meet and greet, you’ll finalize the adoption paperwork and welcome your new pet into your home.
                        Our Mission
                        Our platform was created out of a passion for animals and a desire to help reduce the number of pets in shelters. We believe every pet deserves a loving home, and we aim to make the adoption process as seamless as possible. By leveraging technology, we connect potential adopters with pets in need, streamline the adoption process, and provide ongoing support to ensure successful and happy adoptions.

                        Join us in our mission to give every pet a chance for a better life. Whether you’re looking to adopt or support our cause, your involvement makes a difference. Thank you for choosing our Pet Adoption Platform!
                    </p>


                </div>
            </section>

            {/* Extra-Parts */}
            <section>
                <div className="container mx-auto">
                    <div>
                        <div className="p-6 py-12 mt-10 dark:bg-violet-600 dark:text-gray-50">
                            <div className="container mx-auto">
                                <h1 className="text-3xl text-center font-bold"> Extra Part Section :</h1>
                                <p className="text-center">Pet adoption is the process of transferring responsibility for a pet that was previously owned by another party...</p>

                            </div>
                        </div>
                    </div>
                    <div className="p-5 mx-auto sm:p-10 md:p-16 hover:scale-105  dark:bg-gray-100 dark:text-gray-800">
                        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                            <img src="https://i.ibb.co/N2xgJyj/images-5.jpg" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                            <div className="p-4  border-2 bg-slate-200 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-50">
                                <div className="space-y-2">
                                    <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">The Best Pet Adoption Platfrome</a>
                                    <p className="text-xs dark:text-gray-600"> Management In :
                                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline"> Pet Care </a>
                                    </p>
                                </div>
                                <div className="dark:text-gray-800">
                                    <p>Insert the actual text content here...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
                        <div className="container mx-auto space-y-12">
                            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                                <img src="https://i.ibb.co/PWqJ2wk/images-6.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                    <span className="text-xs uppercase dark:text-gray-600">Pet Care Adoption</span>
                                    <h3 className="text-3xl font-bold">Cat Pet Adoption</h3>
                                    <p className="my-6 dark:text-gray-600">Many adult cats, in contrast, are not very tolerant of other adult cats outside their family group. When adopting an adult cat, it may be best to add only one cat to the family.</p>
                                    <button type="button" className="btn btn-error self-start rounded-lg">Click Now</button>
                                </div>
                            </div>
                            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                                <img src="https://i.ibb.co/nCcQXrf/b2e02f-023629390e8f489b94ea7b60fe6f3e87-mv2.webp" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                    <span className="text-xs uppercase dark:text-gray-600">Pet Care Adoption</span>
                                    <h3 className="text-3xl font-bold">Dog Pet Adoption</h3>
                                    <p className="my-6 dark:text-gray-600">As a last resort, you may be able to surrender your pet to a local shelter or rescue organization. Each agency will have a different process for surrendering a pet to their care....</p>
                                    <button type="button" className="btn btn-error self-start rounded-lg">Click Now</button>
                                </div>
                            </div>
                            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                                <img src="https://i.ibb.co/Fn5DmqM/43147545435-b650d9722d-o-1024x679.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                                    <span className="text-xs uppercase dark:text-gray-600">Pet Care Adoption</span>
                                    <h3 className="text-3xl font-bold">Bubly Pet Care</h3>
                                    <p className="my-6 dark:text-gray-600">Bubbly Paws Professional Pet Grooming Salon · Full Groom session with De-matting for the adorable Golu.Wrapped up a pampering session for our adorable ...
                                    </p>
                                    <button type="button" className="btn btn-error self-start rounded-lg">Click Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto relative w-full flex mt-10 mb-10 py-8 overflow-x-auto">
                    <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="" alt="Image 1" />
                    <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/tDvsF1v/images-9.jpg" alt="Image 2" />
                    <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/9gbFSMH/gallery-of-adorable-adoptable-ottawa-rescue-dogs-1000x628.jpg" alt="Image 3" />
                    <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/0yWpJWj/images-7.jpg" alt="Image 4" />
                    <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/pX6yfjk/images-8.jpg" alt="Image 5" />
                    <img className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src="https://i.ibb.co/m6jKP7t/Puppy-Chewing-Sock.jpg" alt="Image 2" />
                </div>
            </section>

        </div>
    );
};

export default Home;