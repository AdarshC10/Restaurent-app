import React from 'react'
import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-restaurant-logo-design-png-image_5501449.jpg"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
          <b className='roast' >Roast ‘n’ Toast</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
        
          
    </div>
  )
}

export default Header