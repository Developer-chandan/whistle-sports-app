import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
// import Button from "./Button";
import "./ContactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faPhoneAlt
} from "@fortawesome/free-solid-svg-icons";


const ContactForm = () => {
  return (
    <section id="contact" className="section-padding text-left">
      <Container>
        <Row>
          <Col md={8}>
            <h2>Get In Touch</h2>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Enter Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subject</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} />
              </Form.Group>
            </Form>
            <Button className="wu-btn" children="Submit" />
          </Col>
          <Col md={4}>
            <div className="contact-extra">
              <div className="contact-address">
                <div className="icon">
                  {" "}
                  <FontAwesomeIcon icon={faHome} />{" "}
                </div>
                <div className="text">
                  <p>U.S, Cilicon Vally</p>
                </div>
              </div>
              <div className="contact-phone">
                <div className="icon">
                  {" "}
                  <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                </div>
                <div className="text">
                  <p> +55 551 524 5454</p>
                </div>
              </div>
              <div className="contact-email">
                <div className="icon">
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                </div>
                <div className="text">
                  <p>help.Wistel@gmail.com </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default ContactForm;