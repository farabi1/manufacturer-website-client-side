import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';

const Purchase = () => {

    const { purchaseId } = useParams();




    return (
        <div>
            <Header></Header>
            <h1>purchase {purchaseId}</h1>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;