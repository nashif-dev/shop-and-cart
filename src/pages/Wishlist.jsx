import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartArrowDown , faHeart } from '@fortawesome/free-solid-svg-icons'



function Wishlist() {
  return (
    <div>
      <Header/>
      <div className="container py-5">
        <div className="row my-5">
          <div className="col-md-3 mb-2">
            {/* card */}
            <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src="/23.jpg" />
              <Card.Body className='text-center'>
                <Card.Title>Title</Card.Title>
                <div className="d-flex m-1 justify-content-evenly ">
                  <button className='btn '> <FontAwesomeIcon icon={faHeart} className='text-danger fs-4' /></button>
                  <button className='btn '> <FontAwesomeIcon icon={faCartArrowDown} className='text-success fs-4' /></button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist