import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({ part }) => {
    const { _id, img, name, text, rate, price } = part;

    const navigate = useNavigate();

    const navigateToPartsDetail = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl card-bordered border-white">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Description: {text}</p>
                    <p>Per piece : ${rate}</p>
                    <p>Price : ${price}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => navigateToPartsDetail(_id)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;