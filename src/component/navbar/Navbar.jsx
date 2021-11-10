import './Navbar.css'
import {Nav, Navbar, Container, Button } from 'react-bootstrap';
import logo from '../../asset/images/logo.png'

import React from 'react'

export default function navbar() {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" className="nav__bg" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src={logo} alt="Logo" style={{"width": "80px"}} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    
    <Nav className="mx-auto">
      <Nav.Link href="#deets">UNLIMITED TV SHOWS & MOVIES</Nav.Link>
      <Nav.Link href="#deets">
        <Button variant="danger">JOIN NOW</Button>
        </Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
      <Button variant="outline-secondary">SIGN IN</Button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>        
        </div>
    )
}
