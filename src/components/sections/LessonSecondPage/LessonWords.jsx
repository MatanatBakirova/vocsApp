import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LessonWord.css'
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import LessonWordHeader from './LessonWordHeader';

const LessonWords = () => {
  return (
    <>
    <div>
        <section className="lesson-words  ">


          <div className='common-component d-flex align-items-center justify-content-center '>

            <div className='lesson-word-name d-flex align-items-center justify-content-center'>
           <span className='fw-semibold fs-3 '>Lesson Name</span>
           </div>




           <div className='button-components d-flex gap-2'>
           <div className='lesson-hidewords'>
            <input className='hidebutton  ps-2 text-secondary' placeholder="Hide words"></input>
           <div class="form-check form-switch switcher ">
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         </div>   
         </div>
            <div className=' lesson-translateword ms-'>
            <input className='hidebutton  ps-2 text-secondary' placeholder="Hide translate"></input>
           <div class="form-check form-switch switcher ">
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
           </div>
           </div>
          
           <ul className=' components d-flex gap-2 ps-2'>
                <li>
                    <a href=""className='plus-words text-secondary'><GoPlus /></a>
                </li>
                <li>
                    <a href=""className='search-words text-secondary'><CiSearch /></a>
                </li>
                </ul>



                </div>
        </section>




    </div>
    <LessonWordHeader/>
    </>
  )
}

export default LessonWords