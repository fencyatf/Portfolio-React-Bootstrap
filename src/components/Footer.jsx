import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaLinkedin,FaEnvelope, FaArrowUp } from 'react-icons/fa'; // Import FaArrowUp
import './Footer.css';

const Footer = () => {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="footer">
      <Container>
        <Row className="justify-content-center text-center">
          <Col className='footer-title' xs={12}>
            <div onClick={scrollToTop} className="back-to-top d-flex justify-content-center align-items-center gap-2">
              <FaArrowUp size={30} className="arrow-icon" />
            </div>
                <h5>BACK TO TOP</h5>
            

            <div className="social-icons align-items-center justify-content-center">
              <a href="https://github.com/fencyatf" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/fathima-fency-2a370b184/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="social-icon" />
              </a>
              <a href="mailto:fencyatf@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={30} className="social-icon" />
              </a>
            </div>

            <div className='copyright mt-3'>
              <p>© 2024 Fathima Fency. All rights reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
