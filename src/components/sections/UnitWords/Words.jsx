import React from 'react'
import './Words.css'
import { CiPlay1 } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";


const Words = () => {
  return (
    <div>
    <div>
    <ul class="nav justify-content-between p-2 rounded-4">
      <div className='word-components ps-2 gap-2 d-flex align-items-center'>

<li class="nav-item">
<a class="nav-link ciplay1 bg-primary text-white rounded-circle" aria-current="page" href="#">
<CiPlay1 style={{width: "25px", height: "25px"}} />

</a>
</li>
<li class="nav-item">
<a class="nav-link pe-3" href="#">Influential</a>
</li>
</div>
<li class="nav-item">
<a class="nav-link" href="#">Təsirli</a>
</li>
<div className='learned-componet d-flex '>
<li class="nav-item">
<a class="nav-link" href="#">Learned</a>
</li>
<div className='words-edit d-flex pe-3 gap-2'>
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
</ul>
</div>
    </div>
  )
}

export default Words