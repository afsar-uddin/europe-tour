import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Banner from '../Banner/Banner';
import CoverageArea from '../CoverageArea/CoverageArea';
import QuotesCarousel from '../QuotesCarousel/QuotesCarousel';
import TripTypes from '../TripTypes/TripTypes';
import { Spinner } from 'react-bootstrap';

const Home = () => {
    const { isLoading } = useAuth();

    if (isLoading) {
        return <div className="preloader"><Spinner animation="border" /></div>
    };

    return (
        <div className="home-content">
            <Banner></Banner>
            <TripTypes></TripTypes>
            <CoverageArea></CoverageArea>
            <QuotesCarousel></QuotesCarousel>
        </div>
    );
};

export default Home;