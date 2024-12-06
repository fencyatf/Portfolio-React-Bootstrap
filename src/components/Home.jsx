import React from 'react';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import fency_img from './Images/fency_img.png';

const Home = () => {
  return (
    <section className='home' id='home'>
      <Container>
        <Row className='align-items-center justify-content-center'>
          
          <Col xs={12} md={6} className="text-column text-center text-md-start mb-4 mb-md-0">
            <h3 className='tagline'>Hi, I’m</h3>
            <h1 className='name-tag'>Fathima Fency</h1>
            <h3 className="wrap">Full Stack Web Developer</h3>
            <h5 className='para'>Welcome to my personal website! Here you can find more about me, my work, and how to contact me. Feel free to explore all the sections to learn more.</h5>
            
            <div className="social-icons align-items-center justify-content-center gap-3 mt-3">
              <a href="https://github.com/fencyatf" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className="social-icon text-dark" />
              </a>
              <a href="https://www.linkedin.com/in/fathima-fency-2a370b184/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className="social-icon text-dark" />
              </a>
              <a href="mailto:fencyatf@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={30} className="social-icon text-dark" />
              </a>
            </div>
          </Col>
          
          <Col xs={12} md={6}  className="d-flex justify-content-center align-items-center">
            <img className='img-fluid img' src={fency_img} alt="girl" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
