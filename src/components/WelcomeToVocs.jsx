// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../assets/images/Logo.svg'
import WelcomeVocsapp from '../assets/images/welcome_vocsapp.svg'


const WelcomeToVocs = () => {
  return (
<>
<div className=" col-md-5 section-left-side m-3">
      <a href=""><img src={logo} alt="" className="img"/></a>
            <span className="vocsapp_text ">VocsApp</span>
            <p className="welcome_vocsApp pt-4">Welcome to VocsApp Online Learning Platform</p>
            <a href=""><img className="image-1" src={WelcomeVocsapp} alt=""/></a>  
    </div>
</>  )
}

export default WelcomeToVocs