import React from 'react'
import Header from '../components/Header'


function Views() {
  return (
    <div>
      <Header />
      <div className="container py-y">
        <div className="row my-5">
          <div className="col-md-6 text-center">
            <img src="/26.jpg" alt="loading" height={'400px'} className='img-fluid' />
            <div className="d-flex justify-content-around m-3">
              <button className='btn btn-danger rounded'>Add To Wishlist</button>
              <button className='btn btn-success rounded'>Add To Cart</button>
            </div>
          </div>
          <div className="col-md-6">
            <h1>A Very Good Shoe</h1>
            <h3>₹ 2,500</h3>
            <h4>Brand: <span>Nike</span></h4>
            <h4>Category: <span>Running Shoes</span></h4>
            <h5><strong>decsription</strong>: <span> omnis natus quas veritatis minima vero impedit qui ducimus!
              Blanditiis soluta ad quae delectus molestias cupiditate id, deleniti voluptates assumenda nesciunt nam est placeat magni praesentium animi veritatis cum molestiae iure incidunt, ipsam fugit, unde beatae accusantium similique. Incidunt?</span></h5>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Views