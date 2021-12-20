import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';

const Activites = () => {
    const [activites, setActivites] = useState([]);
    const sliceActivites = activites.slice(0,3);

    useEffect(()=>{
        fetch("./activites.JSON")
        .then(res =>res.json())
        .then(data => setActivites(data))
    },[])
    return (
         <Container>
              <div className='py-5'>
              <h2 className='display-4 fw-bolder text-uppercase'>Subscription price</h2>
        <p className='text-capitalize'>excluesive tranning packeges</p>
              </div>
             <Row>
                  {sliceActivites.map(singleActivites => <Col md={4}> <Services
                        key={singleActivites.id}
                        activites={singleActivites}>
                           </Services></Col>)
                           }
              <Link to="/service" className="btn btn-lg btn-danger w-25 mx-auto">More Activites <i class="fas fa-angle-double-right"></i></Link>
                
               
             </Row>
       </ Container>
    );
};

export default Activites;