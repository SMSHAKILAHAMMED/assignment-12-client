import { Helmet } from 'react-helmet-async';
import useAxiosPublic from "../../../../src/Components/hooks/useAxiosPublic";
import useAxiosSecure from "../../../../src/Components/hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Provider/AuthProvider';
import { useContext } from 'react';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddPet = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the pet item data to the server with the image url
            const petsItem = {
                name: data.name,
                age: data.age,
                location: data.location,
                category: data.category,
                short: data.short,
                long: data.long,
                date: data.date,
                time: data.time,
                image: res.data.data.display_url,
                addedEmail: user.email,
                addedName: user.displayName
            }
            // 
            const petsRes = await axiosSecure.post('/addpet', petsItem);
            console.log(petsRes.data)
            if(petsRes.data.insertedId){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the pets.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
            }
        }
        console.log( 'with image url', res.data);
    };
    
    return (
        <div>
            <Helmet>
                <title>Pet Adoption | Add Pet </title>
            </Helmet>
            <div className="bg-[#F4F3F0] p-24 ">
                <h2 className="text-5xl font-extrabold text-center text-indigo-500  mb-5">Add a Pet</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* form pet name and pet age row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Pet Name :</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                   {...register('name', { required: true })}
                                 placeholder="Pet Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Pet age :</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                   {...register('age', { required: true })}
                                 placeholder="Pet age"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Category & pet location row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label
                                className="block mt-3 rounded-xl dark:text-white"
                                htmlFor="country"
                            >
                                Pet Category :
                            </label>
                            <select
                                {...register('category', { required: true })}
                                id="country"
                                className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                                type="text"

                                placeholder="category_name"
                            >
                                <option value="Cat" selected>
                                    Cat
                                </option>
                                <option value=" Dog" selected>
                                    Dog
                                </option>
                                <option value=" Fish" selected>
                                    Fish
                                </option>
                                <option value="Birds" selected>
                                    Birds
                                </option>
                                <option value="Reptiles" selected>
                                    Reptiles

                                </option>
                                <option value=" Amphibians" selected>
                                    Amphibians
                                </option>
                                <option value="All Categorys" selected>
                                    All Categorys
                                </option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">  Pet Location :</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                 {...register('location')}
                                  placeholder="Pet location"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>


                    </div>
                    {/* form short description and long description row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" 
                                {...register('short')}
                                placeholder="short_description"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Long description :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" 
                                {...register('long')}
                                placeholder="Long_description"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form date and time row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Date :</span>
                            </label>
                            <label className="input-group">
                                <input type="date"
                                 {...register('date')}
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Time :</span>
                            </label>
                            <label className="input-group">
                                <input type="time"
                                 {...register('time')}

                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form image-url row */}
                    <div className="md:flex gap-4 mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Image URL :</span>
                            </label>
                            <input type="file"
                             {...register('image', { required: true })}
                              className="file-input w-full max-w-xs" />
                        </div>
                    </div>
                    <input type="submit" value="Submit Now" className="btn btn-block text-xl bg-black text-white" />
                </form>
            </div>
        </div>
    );
};

export default AddPet;