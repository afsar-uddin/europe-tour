import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ManageAllTrips = () => {
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
    }

    return (
        <div className="trip-wrapper">
            <div className="inner-page-header">
                <h2>Manage your all trips</h2>
            </div>
            <Container>
                <Row md={3}>
                    {
                        trips.map(trip => <Col
                            key={trip._id}
                        ><Card>
                                <img src={trip.cover} />
                                <h3>{trip.tripName}</h3>
                                <div className="trip-card-footer">
                                    <button className="primary-btn" onClick={() => handleRemoveTrip(trip._id)}>Remove <span>&#x2715;</span></button>
                                    <p>Status: <span>Pending</span></p>
                                </div>
                            </Card></Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageAllTrips;