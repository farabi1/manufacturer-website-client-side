import React from 'react';
import { useForm } from "react-hook-form";


const AddReviews = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h1>Add a Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" className="input input-bordered input-accent w-full max-w-xs" {...register("name", { required: true, maxLength: 20 })} />
                <input type="text" placeholder="Review" className="input input-bordered input-accent w-full max-w-xs my-6" {...register("text", { required: true, maxLength: 20 })} />
                <input type="text" placeholder="Rating" className="input input-bordered input-accent w-full max-w-xs" {...register("rate", { required: true, maxLength: 20 })} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReviews;