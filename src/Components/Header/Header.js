import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
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
                        {user?.email ? <NavLink activeClassName="active" exact to="/myorders">My Orders</NavLink> : ''}
                        {user?.email ? <NavLink activeClassName="active" exact to="/manage-all-orders">Manage all orders</NavLink> : ''}
                        {user?.email ? <NavLink activeClassName="active" exact to="/add-new-service">Add new service</NavLink> : ''}
                        <NavLink activeClassName="active" exact to="/contact">Contact</NavLink>
                        {user?.email ? <img src={user?.photoURL} alt="Profile Pic" /> : ''}
                        {user?.email ? <button onClick={logOut}>Logout</button> : <NavLink activeClassName="active" exact to="/login">Login</NavLink>}

                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    );
};

export default Header;