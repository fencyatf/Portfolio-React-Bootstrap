import React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <Container>
        <Row className='justify-content-center text-center mt-3'> 
          <Col xs={12}>
            <h2 className="projects-title">PROJECTS</h2>
          </Col>
        </Row>

        <Row className="justify-content-center text-center mb-4">
          <Col xs={12}>
            <h5>Projects I have worked on:</h5>
          </Col>
        </Row>

        <div class="row row-cols-1 row-cols-md-2 g-4 ">
            <div class="col">
                <div class="card text-white bg-dark mb-3" >
                <div class="card-body">
                    <h5 class="card-title justify-content-center text-center">My Resume</h5>
                    <p class="card-text mb-5">A single-page resume with semantic HTML tags presents personal info, experience, and skills in a structured, accessible, and SEO-friendly layout.</p>
                    <Button className=' d-flex justify-content-around' variant="light" href="https://fencyatf.github.io/My-Resume/" target="_blank" rel="noopener noreferrer">View on GitHub</Button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                    <h5 class="card-title justify-content-center text-center">Kerala-Tourism</h5>
                    <p class="card-text mb-4">Kerala Tourism's homepage showcases stunning visuals, destinations, and a validated "Contact Us" form, enhancing user experience and engagement.</p>
                    <Button className=' d-flex justify-content-around' variant="light" href="https://fencyatf.github.io/Kerala-Tourism/" target="_blank" rel="noopener noreferrer">View on GitHub</Button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                    <h5 class="card-title justify-content-center text-center">Personal Budget Tracker</h5>
                    <p class="card-text mb-4">Updated Budget Tracker displays expenses in a table with filters, totals, and downloads, offering clear financial insights for budgeting.</p>
                    <Button className=' d-flex justify-content-around' variant="light" href="https://fencyatf.github.io/Personal-Budget-Tracker/" target="_blank" rel="noopener noreferrer">View on GitHub</Button>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-white bg-dark mb-3">
                <div class="card-body">
                    <h5 class="card-title justify-content-center text-center">Weather Dashboard</h5>
                    <p class="card-text mb-4">The Weather Dashboard shows real-time temperature, conditions, humidity, and wind speed for any city using the OpenWeatherMap API.</p>
                    <Button className=' d-flex justify-content-around' variant="light" href="https://fencyatf.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">View on GitHub</Button>
                </div>
                </div>
            </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
