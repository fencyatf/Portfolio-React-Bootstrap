import React from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaUserAlt, FaPhoneAlt } from 'react-icons/fa'; 
import { FaGithub, FaLinkedin,FaEnvelope } from 'react-icons/fa'
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <h2 className="contact-title">CONTACT</h2>
          </Col>
        </Row>

        <Row xs={1} md={2} className="g-4">
          <Col>
            <div className="contact-section">
                <h5 className='contact-head mt-4'><FaMapMarkerAlt className="icon" /> My Address</h5>
                <p>Veliyil Anas Villa, Cherthala, Alappuzha, Kerala, India</p>
            </div>
          </Col>

          <Col>
            <div className="contact-section">
                <h5 className='contact-head mt-4'><FaUserAlt  className="icon" /> Social Profiles</h5>
                <div className="social-icons align-items-center justify-content-center">
                    <div>
                        <a href="https://github.com/fencyatf" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} className="social-icon mb-2 text-dark" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/fathima-fency-2a370b184/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={20} className="social-icon mb-2 text-dark" />
                        </a>
                    </div>
                </div>
            </div>
          </Col>

          <Col>
            <div className="contact-section">
                <h5 className='contact-head mt-4'><FaEnvelope  aMapMarkerAlt className="icon" /> Email</h5>
                <p>fencyatf@gmail.com</p>
            </div>
          </Col>

          <Col>
            <div className="contact-section">
                <h5 className='contact-head mt-4'><FaPhoneAlt  className="icon" /> Call Me</h5>
                <p>+91 9847215681</p>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center text-center mt-4">
          <Col md={6}>
            <Form className="contact-next-section">
              <h4>Let's have a chat!</h4>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Message:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Write your message here" />
              </Form.Group>

              <Button className='btn-send' type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
