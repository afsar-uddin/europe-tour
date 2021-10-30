import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <>
            <div className="inner-page-header">
                <h2>Your words, Our inspiration</h2>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="add-new-trip trip-form">
                            <form>
                                <input type="text" placeholder="Your full name" required />
                                <input type="text" placeholder="Your email" required />
                                <textarea cols="20" rows="5" placeholder="Your words" required></textarea>
                                <input className="primary-btn" type="submit" value="Send" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Contact;