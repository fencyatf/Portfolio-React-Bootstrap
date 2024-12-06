// About.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <section className="aboutme" id="aboutme">
      <Container>
        
        <Row className="justify-content-center text-center mt-3">
          <Col xs={12} md={8}>
            <h2 className='aboutme-title'> ABOUT ME</h2>
          </Col>
        </Row>

       
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-left">
            <p className="intro-text">
              Highly dedicated front-end developer with a strong foundation in HTML, CSS, Bootstrap, JavaScript, and React.
              Currently studying full-stack web development, I'm focused on enhancing my skills in UI development and backend programming.
            </p>

            <div className="info-row mb-3">
              <h5>PG:</h5>
              <p>Master of Computer Application</p>
            </div>

            <div className="info-row mb-3">
              <h5>UG:</h5>
              <p>Bachelor of Computer Application</p>
            </div>

            <div className="info-row mb-3">
              <h5>City:</h5>
              <p>Cherthala, India</p>
            </div>

            <div className="info-row mb-3">
              <h5>Email:</h5>
              <p>fencyatf@gmail.com</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
