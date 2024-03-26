import React from 'react'
import '../LessonSecondPage/LessonWord.css'

const LessonWordHeader = () => {
  return (
    <div>
        <ul class="nav border justify-content-between">


          <div className='d-flex'>
  <li class="nav-item">
    <a class="nav-link " aria-current="page" href="#">Play</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Words</a>
  </li>
  </div>


  <li class="nav-item">
    <a class="nav-link" href="#">Translate</a>
  </li>
  <div className='d-flex'>
 
  <li class="nav-item">
    <a class="nav-link" href="#">Status</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Edit</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Delete</a>
  </li>
  </div>

</ul>




            





    </div>
  )
}

export default LessonWordHeader