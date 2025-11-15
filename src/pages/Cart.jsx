import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



function Cart() {
  return (
    <div>
      <Header />
      <div className="container p-5">
        <div className="my-5">
          <h1 className='text-info fw-bold'>Cart Summary</h1>
          <div className="row gap-">
            <div className="col-md-8 border border-dark rounded p-4">
              <table className='table'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>name</th>
                    <th>image</th>
                    <th>quantity</th>
                    <th>price</th>
                    <th>...</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Nike Shoe</td>
                    <td><img style={{width:'100px'}} className='' src="/26.jpg" alt="product"/></td>
                    <td className='d-flex'>
                      <button>-</button>
                      <input style={{width:'50px'}} type="text" className='form-control'  readOnly/>
                      <button>+</button>
                    </td>
                    <td>₹2,400</td>
                    <td><button className='btn btn-danger'><FontAwesomeIcon icon={faTrash}/></button></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="col-md-4">
              <div className="border border-dark rounded p-5">
                <h3 className='fw-bold'>Total Amount: <span className='text-danger'>₹ 7,400 </span></h3> <hr />
                <div className="grid mt-2">
                  <button className='btn btn-success rounded form-control'>Check Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart