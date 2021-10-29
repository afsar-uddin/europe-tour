import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <p>All right reserved &copy; <span>Europe Tour</span></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;