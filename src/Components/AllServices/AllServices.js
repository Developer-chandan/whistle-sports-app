import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllActivites from '../AllActivites/AllActivites';

const AllServices = () => {
    const [allService, setAllService] = useState([]);
    useEffect(()=>{
        fetch('./activites.JSON')
        .then(res=>res.json())
        .then(data=>setAllService(data))

    },[])

    return (
        <section>
             <Container>
              <div className='py-5'>
              <h2 className='display-4 fw-bolder text-uppercase'>Subscription price</h2>
        <p className='text-capitalize'>excluesive tranning packeges</p>
              </div>
             <Row>
                { allService.map(eachService =><Col md={4}>
                      <AllActivites services={eachService}
                      
                      ></AllActivites>
                       </Col>)
                        
                 }  
             </Row>
       </ Container>
        </section>
    ); 
};

export default AllServices;