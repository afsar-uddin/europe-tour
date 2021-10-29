import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './TripDetail.css';

const TripDetail = () => {
    const [tripDetail, setTripDetail] = useState({});
    const { id } = useParams();
    const { user } = useAuth();

    console.log(user)

    useEffect(() => {
        const url = `http://localhost:4000/trip-types/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTripDetail(data))
    }, []);
    return (
        <div className="trip-detail-wrapper">
            <div className="inner-page-header">
                <h2>Trip Detail and User Shorpt Information</h2>
            </div>
            <Container>
                <Row md={2}>
                    <Col>
                        <div className="trip-detail">
                            <h3>{tripDetail.tripName}</h3>
                            <img src={tripDetail.cover} alt={tripDetail.tripName} />
                            <h4>{tripDetail.shortDsc}</h4>
                            <p>{tripDetail.detail}</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="">
                            <h3>User short Information</h3>
                            <h4>Full Name: {user.displayName}</h4>
                            <p>Email Address: {user.email}</p>
                            <p>Email verification status: {user.emailVerified ? "Verified" : "Pending for verification"}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="trip-order">
                    <Col>
                        <Link to="/trip-confirm" className="primary-btn">Confirm to book your seat</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TripDetail;