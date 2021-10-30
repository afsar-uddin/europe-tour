import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './MyTrips.css';

const MyTrips = () => {
    const { isLogin, user } = useAuth();
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/trips')
            .then(res => res.json())
            .then(data => setTrips(data))
    }, []);

    // console.log(user.email)
    // console.log(user.email, trips.email)

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
        <>
            <div className="trip-wrapper">
                <div className="inner-page-header">
                    <h2>Here your all booked trips</h2>
                </div>

                <Container>
                    <Row md={3}>

                        {
                            trips.map(trip =>
                                user.email === trip.email ? <Col
                                    key={trip._id}
                                > <Card>
                                        <img src={trip.cover} />
                                        <button className="primary-btn" onClick={() => handleRemoveTrip(trip._id)}>Remove your trip <span>&#x2715;</span></button>
                                    </Card></Col> : ''

                            )
                        }
                    </Row>
                </Container>

            </div>

        </>
    );
};

export default MyTrips;