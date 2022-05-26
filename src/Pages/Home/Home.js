import React from 'react';
import Banner from '../../Components/Banner/Banner';
import BusinessSummary from '../../Components/Business Summary/BusinessSummary';
import Career from '../../Components/Extra Two Section/Career';
import InvestOption from '../../Components/Extra Two Section/InvestOption';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Parts from '../../Components/Parts/Parts';
import Reviews from '../../Components/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Parts></Parts>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>

            {/* Extra two Section */}
            <Career></Career>
            <InvestOption></InvestOption>
            {/* Extra two Section */}

            <Footer></Footer>
        </div>
    );
};

export default Home;