import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AddANewTrip.css';

const AddANewTrip = () => {

    const tripNameRef = useRef();
    const tripShortRef = useRef();
    const tripUrlRef = useRef();
    const tripDetailRef = useRef();

    const handleAddTrip = e => {
        e.preventDefault();
        const tripName = tripNameRef.current.value;
        const shortDsc = tripShortRef.current.value;
        const cover = tripUrlRef.current.value;
        const detail = tripDetailRef.current.value;
        const newTrip = { tripName, shortDsc, cover, detail };

        fetch('https://limitless-shelf-54618.herokuapp.com/trip-types/', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTrip)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Data added successfully!');
                    e.target.reset();
                }
            });

    }
    return (
        <>
            <div className="inner-page-header">
                <h2>Add your trip</h2>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="add-new-trip trip-form">
                            <form onSubmit={handleAddTrip}>
                                <input type="text" ref={tripNameRef} placeholder="Trip name" required />
                                <input type="text" ref={tripShortRef} placeholder="Trip short info" required />
                                <input type="text" ref={tripUrlRef} placeholder="Trip image url" required />
                                <textarea ref={tripDetailRef} cols="20" rows="5" placeholder="Trip description" required></textarea>
                                <input className="primary-btn" type="submit" value="Add Trip" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AddANewTrip;