import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Parts from '../../Components/Parts/Parts';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Parts></Parts>
            <Footer></Footer>
        </div>
    );
};

export default Home;