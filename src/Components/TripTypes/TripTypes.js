import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TripTypes.css'

const TripTypes = () => {
    const [trips, setTrips] = useState([]);
    useEffect(() => {
        fetch('https://limitless-shelf-54618.herokuapp.com/trip-types')
            .then(res => res.json())
            .then(data => setTrips(data))
    }, []);
    return (
        <Container>
            <Row>
                <Col>
                    <div className="sec-title">
                        <h2>Trip Types</h2>
                    </div>
                </Col>
            </Row>
            <Row lg={3} md={2} xs={1} className="justify-content-center">

                {
                    trips.map(trip => <Col
                        key={trip._id}
                    >
                        <div className="single-trip">
                            <img src={trip?.cover} alt={trip.tripName} />
                            <div className="trip-info">
                                <h3>{trip.tripName}</h3>
                                <p>{trip.shortDsc}</p>
                                <Link className="primary-btn" to={`/trip-detail/${trip._id}`}>Proceed to book <span>&#8594;</span></Link>
                            </div>
                        </div>
                    </Col>)
                }

            </Row>
        </Container>
    );
};

export default TripTypes;