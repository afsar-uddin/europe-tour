import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/banner')
            .then(res => res.json())
            .then(data => setBanner(data[0]))
    }, [])
    return (
        <Container fluid className="banner">
            <Row>
                <Col>
                    <img src={banner.cover} alt={banner.title} />
                    <div className="banner-caption">
                        <h2>{banner.title}</h2>
                        <p>{banner.dsc}</p>
                        <Link className="primary-btn" to="/contact">Quick Contact</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;