import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';

const Purchase = () => {

    const { purchaseId } = useParams();

    const [parts, setParts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/purchase/${purchaseId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])


    return (
        <div>
            <Header></Header>
            <div className="card w-96 bg-base-100 shadow-xl w-50 mx-auto">
                <figure><img src={parts.img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{parts.name}</h2>
                    <p>Description: {parts.text}</p>
                    <p>Per piece : ${parts.rate}</p>
                    <p>Minimum order: {parts.minorder}</p>
                    <p>Available : {parts.availquantity}</p>
                    <p>Price : ${parts.price}</p>
                    <div className="card-actions justify-center">

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;