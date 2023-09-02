import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import './Restreview.css';
function Restreview({review}) {
    console.log(review);
    const [open, setOpen] = useState(false);
   
  return (
    <div>
          <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       Review
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
            {
                review?.map((item)=>(
                  <div>
                      <p>{item.name}</p>
                      <p>{item.date}</p>
                      <p>{item.rating}</p>
                      <p>{item.comments}</p>
                  </div>
                   

                ))
            }
         
        </div>
      </Collapse>
    </div>
  )
}

export default Restreview