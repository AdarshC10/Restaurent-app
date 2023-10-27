import React, { useEffect, useState } from 'react'
import './AllRest.css';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Restcard from '../RestCard/Restcard';
import { RestaurentlistAction } from '../Action/RestlistAction';
import { useDispatch, useSelector } from 'react-redux';
//here we need to fetch data from store so we use hook need to import is useSelector 



function AllRest() {
  //  using useSelector to access the state
  //using destructring
  const {allrestaurents} = useSelector(state=>state.allrestReducers)
  console.log(allrestaurents);

  const dispatch =useDispatch()
  const [restaurant, setRestaurant] = useState([])

  //use hook is useEffect(()=>{},[])
  useEffect(()=>{
   dispatch( RestaurentlistAction())
  },[])



  return (
    <>
      <Row>
        {
          //then restaurent will change through redux into allrestaurents
          allrestaurents.map((item)=>(
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