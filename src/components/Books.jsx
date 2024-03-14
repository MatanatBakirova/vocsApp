import React from 'react'
import './Books.css'

const Books = (props) => {
  return (
<>
<div className="card">
    <div className='books-image'>
  <img src="" className="card-img-top" alt=""/>
  </div>
  <div className="card-body">
    <h5 className="card-title ">IELTS Mock test 2023 March</h5>
    <span className='d-flex gap-2'>
            <p className="card-text fw-bold fs-5 text-primary">50 AZN</p>
            <p className="card-text text-decoration-line-through fs-6 p-1 text-secondary">70 AZN</p>
    </span>
    <span href="#" className="owner fw-light">Then owner - Gunel Zakieva</span>
  </div>
</div>






</>  )
}

export default Books