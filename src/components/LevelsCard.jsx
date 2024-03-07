import React from 'react'
import './LevelsCard.css'
const LevelsCard = (props) => {
  return (
    <div className="level-cards">
        <div className="level-card-top">
          <div className='level-card-left'>
          <span className='a1'>{props.short_name}</span>
          <span className='fw-medium p-1'>{props.name}</span>
          </div>
        <div className="level-card-right ">
          <span className='word-content'>
          <span className='text-sm-end text-body-secondary fw-medium opacity-75'>Lesson</span>
          <span className='fw-normal'>-10</span>
          </span>
          <span className='word-content-2'>
          <span className='text-body-secondary fw-medium opacity-75'>Word</span>
          <span className='fw-normal'>-100000</span>
          </span>
        </div>
        </div>
        <div className="level-card-bottom">
        <div className="size-card">
      <div className="size-card-in"></div>
      <div className="size-card-out"></div>
      <span className='ms-2'> 67%</span>
      </div>
    </div>
      </div>
  )
}

export default LevelsCard

