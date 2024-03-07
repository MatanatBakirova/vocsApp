import React, {useState, useEffect} from 'react'
import LevelsCard  from '../components/LevelsCard'
import axios from 'axios'
import Logo from '../assets/images/Logo.svg'
import './HomePageBefore.css'
import VocAI from '../assets/images/VocAI-img.svg'
import frame from '../assets/images/frame.svg'
import award from '../assets/images/award.svg'
import { GoHome, GoStar, GoShareAndroid } from "react-icons/go";
import { IoBookOutline , IoSettingsOutline,  } from "react-icons/io5";
import { LuBookMinus } from "react-icons/lu";
import ai from '../assets/images/ai.svg'
import coin from '../assets/images/coin.svg'
import ring from '../assets/images/ring.svg'


const HomePageBefore = () => {

const [meqale, setMeqale]=useState([])
console.log(meqale)
useEffect( ()=>{
  const adres = "api var"
  axios.get(adres)
  .then(response => setMeqale(response.data))
  .catch(err =>console.log('serverde xeta var'))
},[]);
  return (
<>
  <div className="page ">
    <div className="Sidebar">
  <div className='sidebar-logo'>
          <a href=""><img src={Logo} alt="" className="img"/></a>
            <span className="vocsapp_text ">VocsApp</span>    
  </div>
  <div className="container">
  <div className="sidebar-cards d-flex gap-2">
    <div className='bottom-card'>
    <div className='blue-card'>
      <div className='card-in'>
      <img src={frame} alt="" />
      </div>
      <div className='VocAI d-flex align-items-center justify-content-center'>
      <span className='VocAI-chat'>VocAI Chat</span>
        <img src={VocAI} alt="" />
      </div>
      <button className='button-start bg-white rounded-pill'>Start</button>
    </div>
    </div>
    <div className='bottom-card2'>
    <div className='orange-card'>
      <div className='card-in'>
      <img src={frame} alt="" />
      </div>
      <div className='VocAI d-flex align-items-center justify-content-center'>
      <span className='Test-img'>Test yourself by level</span>
        <img src={award} alt="" className='award-img' />
      </div>
      <button className='button-start bg-white rounded-pill'>Start</button>
    </div>
    </div>
</div>
</div>

<div className='menu'>

  <ul className='menu-links mt-4'>
    <li className='nav-links '>
      <a href="" className=''>
        <GoHome className='icon'/>
        <span className='text active-menu'>Home Page</span>
      </a>

    </li>
    <li className='nav-links'>
      <a href="">
        <LuBookMinus className='icon'/>
        <span className='text'>Lesson</span>
      </a>

    </li>
    <li className='nav-links'>
      <a href="">
        <IoBookOutline className='icon'/>
        <span className='text'>Books</span>
      </a>

    </li>
    <li className='nav-links'>
      <a href="">
        <GoStar className='icon'/>
        <span className='text'>Add Premium</span>
      </a>

    </li>
    <li className='nav-links'>
      <a href="">
        <IoSettingsOutline className='icon'/>
        <span className='text'>Settings</span>
      </a>

    </li>
    <li className='nav-links'>
      <a href="">
        <GoShareAndroid className='icon'/>
        <span className='text'>Share</span>
      </a>

    </li>
   </ul>
</div>

</div>

  <div className='homepage '>
    <header className="header">
      <div className='header-button'>
    <button className='btn btn-outline-primary '>Sign in </button>
    <button className='btn btn-outline-primary'>Sign up </button>
    </div>
    
    <div className='header-nav-element'>
      <div className='images-logo d-flex gap-2 '>
      <img src={ai} alt="" />
      <img src={coin} alt="" />
      <img src={ring} alt="" />
      </div>
  </div>
  </header>

  <section className='mt-4'>
    <div className="levels-word">
    <span className='fs-4 fw-semibold'>Levels</span>
    </div>
    <div className="container">
      {

         meqale && meqale.map (aData =>(
          <LevelsCard key={aData.id} name={aData.name} short_name={aData.short_name} />))
        }
        
   {/* { <div className="col-12 col-md-6 col-lg-4">
      <LevelsCard/>

      </div>} */}

    </div>
  </section>
  </div>
  </div>


            



 

</>
  )
}

export default HomePageBefore