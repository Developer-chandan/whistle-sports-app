import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Notfound.css';
const Notfound = () => {
    return (
        
   <div className="error-page section-padding">
      <Container>
        <Col md={12}>
          <h1>Error 404!</h1>
          <h3>Page Not Found</h3>
          {/* <Link className="wu-btn" to="">
            Go Home
          </Link> */}
        </Col>
      </Container>
    </div>
        
    );
};

export default Notfound;