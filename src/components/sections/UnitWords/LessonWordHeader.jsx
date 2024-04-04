import React from 'react'
import './LessonWord.css'

const LessonWordHeader = () => {
  return (
    <div>
    <ul class="nav border justify-content-between p-2 rounded-4 d-flex">
      <div className='word-components d-flex'>

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
<div className='d-flex gap-2'>

<li class="nav-item  ">
<a class="nav-link me-2" href="#">Status</a>
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