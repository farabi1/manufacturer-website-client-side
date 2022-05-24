import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div>
            <h1 className='text-center text-2xl font-bold mb-12'>Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 my-12'>
                {
                    reviews.map(review => <Review key={reviews._id} review={review}></Review>)
                }
            </div >
        </div>
    );
};

export default Reviews;