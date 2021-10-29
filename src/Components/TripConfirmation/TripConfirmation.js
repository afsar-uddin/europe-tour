import React from 'react';
import useAuth from '../../hooks/useAuth';
import './TripConfirmation.css'

const TripConfirmation = () => {
    const { user } = useAuth();
    return (
        <div className="trip-confirmation">
            <h2>Congratulations <span>{user?.displayName}</span> ! </h2>
            <p>Your trip confirmed, One of our support memeber contact with you soon.</p>
        </div>
    );
};

export default TripConfirmation;