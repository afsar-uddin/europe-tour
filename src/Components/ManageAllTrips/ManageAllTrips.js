import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ManageAllTrips = () => {
    const { isLoading } = useAuth();
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/trips')
            .then(res => res.json())
            .then(data => setTrips(data))
    }, []);
    const handleRemoveTrip = id => {
        const proceed = window.confirm("Are you sure delete the user");
        if (proceed) {
            const url = `http://localhost:4000/trips/${id}`;
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
                                <div className="trip-card-footer">
                                    <button className="primary-btn" onClick={() => handleRemoveTrip(trip._id)}>Remove <span>&#x2715;</span></button>
                                    <Link to={`/trip/update/${trip._id}`}><button className="primary-btn">Update status</button></Link>
                                </div>
                            </Card></Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllTrips;