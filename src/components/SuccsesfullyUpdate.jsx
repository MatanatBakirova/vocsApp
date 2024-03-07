import React from 'react'
import logo from '../assets/images/Logo.svg'
import WelcomeVocsapp from '../assets/images/welcome_vocsapp.svg'
import ImageSuccesPassword from '../assets/images/succes-update.svg'
import WelcomToVocs from './WelcomToVocs'

const SuccsesfullyUpdate = () => {
  return (
    <>
    <div className="container">
  <div className="d-flex">
    <WelcomToVocs/>
      <div className="border-line m-3"></div>

<div className=" succes-password col-md-6  ">
  <img src={ImageSuccesPassword} alt="" className='3'/>
       <h1 className='update_succes text-secondary  fs-2'>Your password has been successfully updated</h1>
      <h6 className='update_succes_txt opacity-25 mt-3 lh-base'>You have successfully reset your password.Please use a new password when sign in.</h6>
  <button type="submit" className=" my-succes-btn bg-primary rounded-4 ">Sign in</button>
  </div>
    </div>
    </div>
    </>
  )
}

export default SuccsesfullyUpdate