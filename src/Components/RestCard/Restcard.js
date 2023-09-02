import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Restcard.css';
import { Link } from 'react-router-dom';
function Restcard({restlist}) {
  console.log(restlist);
  return (
    <>
    <Link to={`/view/${restlist.id}`}>
    <Card className='card' style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src={restlist.photograph} />
      <Card.Body>
        <Card.Title className='text-dark'>{restlist.name}</Card.Title>
        
        <Card.Text className='text-dark'>
          {restlist.address} <br />
          {restlist.cuisine_type} <br />
          {restlist.neighborhood}
        </Card.Text>
       
          </Card.Body>
        </Card>
    </Link>
      

    </>
  )
}

export default Restcard