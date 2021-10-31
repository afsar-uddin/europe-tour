import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ManageAllTrips = () => {
    const { isLoading } = useAuth();
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        fetch('https://limitless-shelf-54618.herokuapp.com/trips')
            .then(res => res.json())
            .then(data => setTrips(data))
    }, []);
    const handleRemoveTrip = id => {
        const proceed = window.confirm("Are you sure delete the trip?");
        if (proceed) {
            const url = `https://limitless-shelf-54618.herokuapp.com/trips/${id}`;
            fetch(url, {
                method: 'delete',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingUser = trips.filter(trip => trip._id !== id);
                        setTrips(remainingUser)
                    };
                })
        }
    };

    if (isLoading) {
        return <div className="preloader"><Spinner animation="border" /></div>
    };

    return (
        <div className="trip-wrapper">
            <div className="inner-page-header">
                <h2>Manage your all trips</h2>
            </div>
            <Container>
                <Row lg={3} md={2} xs={1}>
                    {
                        trips.map(trip => <Col
                            key={trip._id}
                        ><Card>
                                <img src={trip.cover} />
                                <h3>{trip.tripName}</h3>
                                <div className="btn-status">
                                    <button className="primary-btn" onClick={() => handleRemoveTrip(trip._id)}>Remove <span>&#x2715;</span></button>
                                    <span>Status: {trip.status}</span>
                                </div>
                                <Link to={`/trip/update/${trip._id}`}><button className="primary-btn">Update status</button></Link>
                            </Card></Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllTrips;