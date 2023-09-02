import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Image  from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from '../RestOp/Restop';
import Restreview from '../RestReview/Restreview';

function View() {

//state creation
//to hold particular restuarent details
const[RestDetails, setRestDetails]=useState([])


    //? get particular id from the restaurent

    // const pathParameter = useParams()
    // console.log(pathParameter.id);

                //!OR

    //TODO  destructing in react

    const {id} = useParams()
    console.log(id);

    //? then API call for fetch particular restaurent details

    //1  first need URL
    const fetchData =async()=>{
        // const response= await axios.get(`http://localhost:3001/restaurants/${id}`)
        // console.log(response.data);
              //!OR
        //? destructring

        const {data}= await axios.get(`http://localhost:3001/restaurants/${id}`)
         console.log(data);
         setRestDetails(data)
    }
    console.log(RestDetails);
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <>
    <Row>
       
        <Col sm={12} md={3}>
            {/* image */}
        <Image className='rounded border border-2 m-3 shadow' src={RestDetails.photograph } fluid/>

       

         </Col >
        
        

         <Col>
                
           {/* CONETNT */}
           <h1 className=' text-center m-4'> {RestDetails.name}</h1>
            {/* create list in react bootstrap */}
                <div className='container w-50 mb-5'>
                    <ListGroup className='shadow'>
                    <ListGroup.Item>Neighborhood :{RestDetails.neighborhood}</ListGroup.Item>
                    <ListGroup.Item>Cuisine_type {RestDetails.cuisine_type}</ListGroup.Item>
                    <ListGroup.Item> Address : {RestDetails.address}</ListGroup.Item>
                    <ListGroup.Item> <Restop op={RestDetails.operating_hours}/></ListGroup.Item>
                    <ListGroup.Item> <Restreview review={RestDetails.reviews}/>  </ListGroup.Item>
                    
                    
                   
                    </ListGroup>
                </div>



        </Col>
    </Row>
    
    
    
    </>
  )
}

export default View