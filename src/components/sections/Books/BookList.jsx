import React from 'react'
import { PiBrain } from "react-icons/pi";
import { FaArrowUpRightDots } from "react-icons/fa6";
import LessonTop from '../Lessons/LessonTop'
import Header from '../../Header'
import Levels from '../Levels/Levels';
import { Link } from 'react-router-dom';

const BookList = () => {
  return (

    <div>
        <Header/>
        <Levels/>
        <LessonTop/>
    <div className='lesson-name'>
        {/* <Link to={1}> */}
        <span className='fw-semibold fs-5 ps-4'>Unit title</span>
        {/* </Link> */}
    
    <div className='total-words'>
        <div>
            <span className='text-secondary'>Total words</span>
            <span className='fw-medium text-center'>100</span>
        </div>
        {/* <div>
            <span className='text-secondary'>Learned</span>
            <span className='fw-medium text-center'>20</span>
        </div> */}
        {/* <div>
            <span className='text-secondary'>Don't learn</span>
            <span className='fw-medium text-center'>80</span>
        </div> */}
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
{/*         
        <ul>
            <li>
                <a href=""><FaTrashAlt /></a>
            </li>
        </ul> */}
        


    </div>
</div>
</div>    )
}

export default BookList