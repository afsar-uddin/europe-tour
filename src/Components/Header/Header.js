import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="head-nav">
            < Container >
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                    <Nav>
                        <Link exact to="/">Home</Link>
                        <Link exact to="/myorders">My Orders</Link>
                        <Link exact to="/ordersmanage">Manage all orders</Link>
                        <Link exact to="/addservice">Add new service</Link>
                        <Link exact to="/contact">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
};

export default Header;