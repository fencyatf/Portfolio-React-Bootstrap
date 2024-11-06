import React from 'react';
import { Navbar, Nav, Button, Image } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="main">
      <Navbar expand="md" className='p-4' fixed="top" style={{ backgroundColor: ' black' }}>
        <Navbar.Brand href="#home">
          <Image className='img-logo' src="https://i.pinimg.com/236x/de/8b/7f/de8b7fbfb2aa13430071e5f605eb4f63.jpg" rounded/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="custom-link"> 
            <Nav.Link href="#aboutme" className="custom-nav-link">About Me</Nav.Link>
            <Nav.Link href="#skills" className="custom-nav-link">Skills</Nav.Link>
            <Nav.Link href="#projects" className="custom-nav-link">Projects</Nav.Link>
            <Button href="#contact" variant="light" className="contact-button">CONTACT ME</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </div>
  );
}

export default Navigation;
