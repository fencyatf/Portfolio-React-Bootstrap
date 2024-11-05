import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <h2 className="skills-title">SKILLS</h2>
          </Col>
        </Row>

        <Row className="justify-content-center mt-2">
          <Col xs={12} className="text-center mb-5">
            <h5>USING NOW:</h5>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="skill-item">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFAoHUEQ7PBsW9cQCtqWbgcuJaYyCUk47_Q&s" rounded className="skill-icon" />
            <h6>HTML</h6>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="skill-item">
            <Image src="https://images.javatpoint.com/csspages/images/css-tutorial.png" rounded className="skill-icon" />
            <h6>CSS</h6>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="skill-item">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" rounded className="skill-icon" />
            <h6>BOOTSTRAP</h6>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="skill-item">
            <Image src="https://quintagroup.com/cms/js/js-image/javascript-logo.png" rounded className="skill-icon" />
            <h6>JAVASCRIPT</h6>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="skill-item">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s" rounded className="skill-icon" />
            <h6>REACT</h6>
          </Col>
        </Row>

        <Row className="justify-content-center mt-2">
          <Col xs={12} className="text-center mb-5">
            <h5>LEARNING:</h5>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="skill-item">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" rounded className="skill-icon" />
            <h6>NODEJS</h6>
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} className="skill-item">
            <Image src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" rounded className="skill-icon" />
            <h6>MONGODB</h6>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
