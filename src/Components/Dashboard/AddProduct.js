import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/tools', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Thank you for your Review", {
                        position: toast.POSITION.TOP_CENTER
                    })
                }

            })
    }

    return (
        <div>
            <h2 className="text-3xl">Add A New Tool</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='grid grid-cols-1 lg:grid-cols-2 my-5 mx-10'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter tool name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", { required: true })}
                        />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price per Unit</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Price per quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("price", { required: true })}
                        />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Tool Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Price per quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("description", { required: true })}
                        />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input
                            type="url"
                            placeholder="Enter Price per quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("img", { required: true })}
                        />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Minimum Order Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Price per quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("minorder", { required: true })}
                        />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Price per quantity"
                            className="input input-bordered w-full max-w-xs"
                            {...register("quantity", { required: true })}
                        />

                    </div>
                </div>
                <input className='btn w-full max-w-xs text-white mb-5' type="submit" value="Add Tool" />
            </form>
        </div>
    );
};

export default AddProduct;