import React from 'react';
import { useForm } from "react-hook-form";


const AddReviews = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div>
            <h1 className='my-6'>Add a Review</h1>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" className="input input-bordered input-accent w-full max-w-xs" {...register("name", { required: true, maxLength: 20 })} />
                <input type="text" placeholder="Review" className="input input-bordered input-accent w-full max-w-xs my-6" {...register("text", { required: true, maxLength: 20 })} />
                <input type="text" placeholder="Rating" className="input input-bordered input-accent w-full max-w-xs" {...register("rate", { required: true, maxLength: 20 })} />

                <input className=' mt-10' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReviews;