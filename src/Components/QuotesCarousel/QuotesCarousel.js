import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './QuotesCarousel.css';

const QuotesCarousel = () => {
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/quotes')
            .then(res => res.json())
            .then(data => setQuotes(data))
    }, []);
    return (
        <div className="carousel-area">
            <Container>
                <Row>
                    <Col>
                        <div className="sec-title">
                            <h2>Our core clients feedbac</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="carousel-quotes">
                <Container>
                    <Row>
                        <Carousel>
                            {
                                quotes.map(quote => <Carousel.Item
                                    key={quote._id}
                                >
                                    <img
                                        src={quote.photoUrl}
                                        alt={quote.name}
                                    />
                                    <Carousel.Caption>
                                        <h3>{quote.name}</h3>
                                        <p>{quote.quote}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>)
                            }

                        </Carousel>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default QuotesCarousel;