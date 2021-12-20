import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../image/about.jpeg";
import './About.css';

const About = () => {
  return (
    <section id="about-banner" className="section-padding pt-5">
      <Container>
        <Row>
          <Col md={6}>
            <div className="about-banner-img">
              <img src={image} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col md={6}>
            <div className="about-banner-text">
              <h1 className="text-primary">About Whistle Club</h1>
              <p>
              All sectors of society have a long way to go for being more environmentally friendly and introducing more sustainable practices in our society. Sport programmes are not exempt from this. Governments and corporations need to step up their actions for reducing emissions, but even grassroot sport teams can take steps to reduce their own impacts on the environment
              </p>
              <p>
              First, clubs can introduce active transport as the main way of getting to practices or tournaments, if possible. Coaches can frame this in a way that biking, running, walking, rollerblading, or skating will contribute to each athlete’s personal development. Encouraging athletes to be more active getting to practices can help boost their training.skating will contribute to each athlete’s personal development. Encouraging athletes to be more active getting to practices can help boost their training.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;