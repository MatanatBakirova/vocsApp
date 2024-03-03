import React from 'react'
import logo from '../assets/images/Logo.svg'
import WelcomeVocsapp from '../assets/images/welcome_vocsapp.svg'
import { CiLock } from "react-icons/ci";
import WelcomToVocs from './WelcomToVocs';

const UpdatePassword = () => {
  return (
    <>
  <div className="d-flex">
    <WelcomToVocs/>
  
      <div className="border-line m-3"></div>
<div className="col-md-6 d-flex justify-content-center align-items-center">
    <form>
       <h1 className='update_password text-secondary text-center fs-2'>Update your password here</h1>
      <h6 className='update_password_txt text-center opacity-25'>Make sure you use the strongest combination for your new password</h6>
      <div className= " form-div m-3">
      <CiLock className ="fa-lock" />
        <input type="password" className="form-control rounded-4" id="exampleInputPassword1" 
        placeholder="Password"/>
      </div>
      <div className= " form-div m-3">
      <CiLock className ="fa-lock" />
        <input type="password" className="form-control rounded-4" id="exampleInputPassword1" 
        placeholder="Repeat the new password"/>
      </div>
  
      <button type="submit" className=" my-update-btn bg-primary rounded-4 ">Update Password</button>
   
      </form>
  </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default UpdatePassword