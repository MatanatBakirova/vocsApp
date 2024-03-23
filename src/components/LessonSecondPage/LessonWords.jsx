import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './LessonWord.css'
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const LessonWords = () => {
  return (
    <div>
        <section className="lesson-words d-flex ">
            <div className='lesson-word-name d-flex align-items-center justify-content-center'>
           <span className='fw-semibold fs-3 me-5'>Lesson Name</span>
           </div>
   
           <div className='lesson-hidewords'>
            <input className='0hidebutton  ps-2 text-secondary' placeholder="Hide words"></input>
           <div class="form-check form-switch switcher ">
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         </div>   
         </div>
            <div className=' lesson-translateword'>
            <input className='hidebutton  ps-2 text-secondary' placeholder="Hide translate"></input>
           <div class="form-check form-switch switcher ">
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
           </div>
           <div className='components d-flex gap-2'>
           <span className='plus-words '><GoPlus/></span>
           <span className="search-words"><CiSearch /></span>

           </div>
         


        </section>




    </div>
  )
}

export default LessonWords