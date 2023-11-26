import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
const AppNavBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Student Admission Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Student List</NavLink>
                        <NavLink className="nav-link" to="/create">Registration</NavLink>
                    </Nav>
                </Container>
            </Navbar>
    );
};

export default AppNavBar;