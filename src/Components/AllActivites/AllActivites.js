import React from 'react';
import { Button, Card } from 'react-bootstrap';

const AllActivites = props => {
    // console.log("this is activites", props);
    const { image, title, tranning, descp, cetagory, price } = props.services;
    
    return (
        <section id='allactivites'>
        <Card className='service-card text-left'>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='text-primary'> {tranning}</Card.Text>
                <Card.Text>{descp}</Card.Text>
                <Card.Text>
                    <p>  <strong className='text-secondary'>Cetagory: </strong>{cetagory}</p>
                    <p className='service-price'><strong className='text-secondary'>  Price:</strong>${price}</p>

                </Card.Text>


            </Card.Body>
            <Button variant="primary">Jump For Tranning</Button>
        </Card>
    </section >
       
    );
};

export default AllActivites;