import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './TripConfirmation.css'

const TripConfirmation = () => {
    const { user } = useAuth();
    return (
        <div className="trip-confirmation">
            <h2>Congratulations <span>{user?.displayName}</span> ! </h2>
            <p>Your trip is confirmed. See your  <Link to="/mytrips">all trips</Link> </p>
        </div>
    );
};

export default TripConfirmation;