import React from 'react';

const Review = ({ review }) => {

    const { name, text, rate } = review;
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2>{text}</h2>
                <p>{rate}</p>
            </div>
        </div>
    );
};

export default Review;