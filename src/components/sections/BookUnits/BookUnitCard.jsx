// eslint-disable-next-line no-unused-vars
import React from 'react'
import './BookUnit.css'
 import { PiBrain } from "react-icons/pi";
 import { FaArrowUpRightDots } from "react-icons/fa6";
 import { FiEdit } from "react-icons/fi";
 import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BookUnitCard = ({id,bookUnit}) => {
  return (
    <div className='d-flex mb-2'>
        <div className='lesson-name'>
            <Link to={`/unitwords/${id}`}>
            <span className='fw-semibold fs-5 ps-4'>{bookUnit.title}</span>
            </Link>

        <div className='total-words'>
            <div>
                <span className='text-secondary'>Total words</span>
                <span className='fw-medium text-center'>{bookUnit.words_count}</span>
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
            {/* <ul>
                <li>
                    <a href=""><FiEdit /></a>
                </li>
            </ul> */}
            
            {/* <ul>
                <li>
                    <a href=""><FaTrashAlt /></a>
                </li>
            </ul> */}
            


        </div>
    </div>
    </div>
  )
}

export default BookUnitCard