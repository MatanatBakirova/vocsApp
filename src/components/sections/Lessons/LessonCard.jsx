import React from 'react'
import './Lesson.css'
 import { PiBrain } from "react-icons/pi";
 import { FaArrowUpRightDots } from "react-icons/fa6";
 import { FiEdit } from "react-icons/fi";
 import { FaTrashAlt } from "react-icons/fa";

const LessonCard = () => {
  return (
    <div>
        <div className='lesson-name'>
            <span className='fw-semibold fs-5 ps-4'>Unit title</span>

      
        <div className='total-words'>
            <div>
                <span className='text-secondary'>Total words</span>
                <span className='fw-medium text-center'>100</span>
            </div>
            <div>
                <span className='text-secondary'>Learned</span>
                <span className='fw-medium text-center'>20</span>
            </div>
            <div>
                <span className='text-secondary'>Don't learn</span>
                <span className='fw-medium text-center'>80</span>
            </div>
        </div>

        <div className='lesson-icons d-flex pe-3 pt-3'>
            <ul>
                <li>
                    <a href=""><PiBrain /></a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href=""><FaArrowUpRightDots /></a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href=""><FiEdit /></a>
                </li>
            </ul>
            
            <ul>
                <li>
                    <a href=""><FaTrashAlt /></a>
                </li>
            </ul>
            


        </div>
    </div>
    </div>
  )
}

export default LessonCard