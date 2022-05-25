import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <h1 className=' text-3xl text-pink-700 font-semibold text-center my-16'>The link you provided is not valid or link is broken :)</h1>
            <div className="flex justify-center">
                <img className="object-cover h-72 w-96" src="https://png.pngtree.com/png-clipart/20200225/original/pngtree-error-page-not-found-concept-illustration-flat-design-with-people-this-png-image_5276232.jpg" alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;