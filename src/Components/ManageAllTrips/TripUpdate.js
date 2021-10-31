import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ManageAllTrips.css';

const TripUpdate = () => {
    const [status, setStetus] = useState({});
    const { id } = useParams();
    console.log(status)

    useEffect(() => {
        const url = `https://limitless-shelf-54618.herokuapp.com/trips/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setStetus(data))
    }, []);

    const handleStatusChange = e => {
        const presentStatus = { status: e.target.value, tripName: status.tripName };
        setStetus(presentStatus)
    };

    const handleUpadeStatus = e => {
        const url = `https://limitless-shelf-54618.herokuapp.com/trips/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("updated successfully");
                    setStetus({})
                }
            });

        window.location = '/manage-all-trips';
        e.preventDefault();
    };

    return (
        <div className="status-wrapper">
            <div className="inner-page-header"><h2>Manage your trip status(Pending/Approved)</h2></div>
            <div className="trip-status-title"><h3> Status update for : {status?.tripName}</h3></div>
            <form onSubmit={handleUpadeStatus}>
                <input type="text" onChange={handleStatusChange} placeholder="Update status" value={status?.status || ''} />
                <input className="primary-btn" type="submit" value="Update" />
            </form>
        </div>
    );
};

export default TripUpdate;