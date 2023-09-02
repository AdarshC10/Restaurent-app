import React, { useEffect, useState } from 'react'
import './AllRest.css';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Restcard from '../RestCard/Restcard';



function AllRest() {
  const [restaurant, setRestaurant] = useState([])
const fetchData = async()=>{
    const response =await axios.get('http://localhost:3001/restaurants')
    console.log(response.data);
    setRestaurant(response.data);
  }
  console.log(restaurant);
  //use hook is useEffect(()=>{},[])
  useEffect(()=>{
    fetchData()
  },[])


  return (
    <>
      <Row>
        {
        restaurant.map((item)=>(
          <Col sm={12} md={6} lg={4} xl={3}>
            <Restcard restlist={item}/>
          </Col>
        ))
         
        }
      </Row>
    </>
  )
}

export default AllRest