import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePet = () => {
    const pets = useLoaderData();
    console.log(pets)
    const handleUpdatePet = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const age = form.age.value;
        const location = form.location.value;
        const category = form.category.value;
        const short = form.short.value;
        const long = form.long.value;
        const date = form.date.value;
        const time = form.time.value;
        const image = form.image.value;
        const updatePet = { name, age, category, location, short, long, date, time, image };
        console.log(updatePet);

        fetch(`http://localhost:5000/pet/${pets._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatePet),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: `${updatePet.name} Updated Successfully`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
                console.log(data);
            })
            .catch((data) => {
                console.log(data);

            });
    }

    return (
        <div>
            <div className="bg-[#F4F3F0] p-24 ">
                <h2 className="text-5xl font-extrabold text-center text-indigo-500  mb-5">Update Pet</h2>
                <form onSubmit={handleUpdatePet}>
                    {/* form pet name and pet age row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Pet Name :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Pet Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Pet age :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="age" placeholder="Pet age"
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
                                name="category"
                                id="country"
                                className="w-full p-3 border rounded-md focus:outline-[#FF497C]"
                                type="text"

                                placeholder="category_name"
                            >
                                <option value="Card Making" selected>
                                    Cat
                                </option>
                                <option value="Scrapbooking" selected>
                                    Dog
                                </option>
                                <option value="Paper Quilling & origami" selected>
                                    Fish
                                </option>
                                <option value="Glass Painting" selected>
                                    Birds
                                </option>
                                <option value="Lampworking" selected>
                                    Reptiles

                                </option>
                                <option value="Glass Dying & Staining" selected>
                                    Amphibians
                                </option>
                                <option value="Glass Dying & Staining" selected>
                                    All Categorys
                                </option>
                            </select>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">  Pet Location :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="location" placeholder="Pet location"
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
                                <input type="text" name="short" placeholder="short_description"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Long description :</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="long" placeholder="Long_description"
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
                                <input type="date" name="date"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Time :</span>
                            </label>
                            <label className="input-group">
                                <input type="time" name="time"
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
                            <label className="input-group">
                                <input type="text" name="image" placeholder="image"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Update Now" className="btn btn-block text-xl bg-black text-white" />
                </form>
            </div>
        </div>
    );
};

export default UpdatePet;