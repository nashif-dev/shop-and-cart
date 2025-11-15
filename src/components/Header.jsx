import React from 'react'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Nav, Navbar, Container, Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand > <Link to={'/'} className='text-decoration-none text-light fw-semibold fs-3'>
        <FontAwesomeIcon icon={faTruck} /> Shop and Cart </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " className='bg-light' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2">
            <Link to={'/wishlist'} className='text-light text-decoration-none btn btn-dark rounded'> Wishlist <Badge pill bg="secondary">4</Badge> </Link>
              <Link to={'/cart'} className='text-light text-decoration-none btn btn-dark rounded'> Cart <Badge pill bg="secondary">2</Badge> </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header