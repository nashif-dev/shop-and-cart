import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <div>
      <Header />
      <div className="container py-5">
        <div className="row my-5">
          {/* duplicate */}
          <div className="col-md-3 mb-2">
            {/* card */}
            <Card style={{ width: '18rem' }}>
              <Card.Img height={'250px'} variant="top" src="/23.jpg" />
              <Card.Body className='text-center'>
                <Card.Title>Title</Card.Title>
                <Link to={`products/id/view`} className='btn btn-dark rounded'>view more</Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home