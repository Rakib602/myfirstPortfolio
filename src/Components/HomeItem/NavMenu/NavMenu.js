import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavMenu = () => {
    return (
        <div className="container">
            <Navbar collapseOnSelect expand="lg"  variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Rakib</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#Services">Services</Nav.Link>
                            <Nav.Link href="#Projects">Projects</Nav.Link>
                            <Nav.Link href="#contactme">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavMenu;