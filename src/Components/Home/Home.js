import React from 'react';
import Banner from '../Banner/Banner';
import CoverageArea from '../CoverageArea/CoverageArea';
import QuotesCarousel from '../QuotesCarousel/QuotesCarousel';

const Home = () => {
    return (
        <div className="home-content">
            <Banner></Banner>
            <CoverageArea></CoverageArea>
            <QuotesCarousel></QuotesCarousel>
        </div>
    );
};

export default Home;