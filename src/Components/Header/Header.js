import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut();
        window.location = '/';
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="head-nav">
            < Container >
                <Navbar.Brand as={NavLink} to="/">
                    <img src={Logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="me-auto">
                    <Nav>
                        <NavLink activeClassName="active" exact to="/">Home</NavLink>
                        {user?.email ? <NavLink activeClassName="active" exact to="/mytrips">My Trips</NavLink> : ''}
                        {user?.email ? <NavLink activeClassName="active" exact to="/manage-all-trips">Manage all trips</NavLink> : ''}
                        {user?.email ? <NavLink activeClassName="active" exact to="/add-new-trip">Add new trip</NavLink> : ''}
                        <NavLink activeClassName="active" exact to="/contact">Contact</NavLink>
                        {user?.email ? <img src={user?.photoURL} alt="Profile Pic" /> : ''}
                        {user?.email ? <button className="primary-btn" onClick={handleLogout}>Logout</button> : <NavLink activeClassName="active" exact to="/login">Login</NavLink>}

                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
};

export default Header;