import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CoverageArea.css';

const CoverageArea = () => {
    const [coverage, setCoverage] = useState([]);
    useEffect(() => {
        fetch('https://limitless-shelf-54618.herokuapp.com/coverage-area')
            .then(res => res.json())
            .then(data => setCoverage(data))
    }, []);
    return (
        <div className="coverage-area">
            <Container>
                <Row>
                    <Col>
                        <div className="sec-title">
                            <h2>Our coverage area</h2>
                        </div>
                    </Col>
                </Row>
                <Row lg={4} md={3} xs={1} className="justify-content-center">
                    {
                        coverage.map(area => <Col
                            key={area._id}
                        >
                            <div className="coverage">
                                <h3>{area.title}</h3>
                                <div>
                                    <img src={area.img} alt={area.title} />
                                </div>
                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default CoverageArea;