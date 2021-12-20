import React from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Col, Container, Row } from "react-bootstrap";
 import { faCoffee } from "@fortawesome/free-solid-svg-icons";
 import './Footer.css';

 const Footer = () => {
    return (
      <footer className="mt-5">
        <Container>
          <Row>
            <Col md={4}>
              <div className="footer-about">
                <h3>Wistle, Best Tranning For your's</h3>
                <p>
                Exercise Swimming Practices and Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu felis ut nunc interdum cursus. Nunc fermentum nec turpis nec...
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer-links">
                <h3>Important Links</h3>
                <ul>
                  <li>
                    <a href="erg">Home</a>
                  </li>
                  <li>
                    <a href="reg">About</a>
                  </li>
                  <li>
                    <a href="weg">Courses</a>
                  </li>
                  <li>
                    <a href="gweg">Contact</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4}>
              <div className="footer-socials">
                <h3>Socials</h3>
                <ul>
                  <li>
                    <a href="/">
                    <i class="fab fa-facebook-square"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <i class="fab fa-youtube"></i> Youtube
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <i class="fab fa-twitter"></i> Twitter
                    </a>
                  </li>
                  <li>
                    <a href="/">
                    <i class="fab fa-instagram"></i> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
  
  export default Footer;