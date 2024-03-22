// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Register.css'
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import WelcomeToVocs from './WelcomeToVocs.jsx';

const Register = () => {
  return (
<>
<div className=" register container">
  <div className='d-flex justify-content-center'style={{width:"1024px"}}>
  <div className="d-flex">
    <WelcomeToVocs/>
    </div>
      <div className="border-line m-3"></div>
<div className="col-md-6 d-flex justify-content-center align-items-center">
    <form>
      <div className='btn-2hisse d-flex '>
      <div className="btn-name ms-3 m-1">
      <FaRegUser className='fa-user'/>
        <input type="email" className=" form-control-1 form-control rounded-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
      </div>
      <div className="ms-2 m-1">
        <input type="email" className=" form-control-1 form-control rounded-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
      </div>
      </div>
      <div className="form-div m-3">
      <MdOutlineEmail className ="fa-envelope" />
        <input type="email" className="form-control rounded-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
      </div>
      <div className="form-div m-3">
      <FaPhoneAlt  className='fa-number'/>
        <input type="number" className="form-control rounded-4" id="exampleInputNumber" aria-describedby="numberHelp" placeholder="Number"/>
      </div>
      <div className= " form-div m-3">
      <CiLock className ="fa-lock" />
      <IoEyeOutline className="eye-icon" />
        <input type="password" className="form-control rounded-4" id="exampleInputPassword1" 
        placeholder="Password"/>
      </div>
      <div className="form-check d-flex ms-3">
        <input type="checkbox" className="form-check-input border-warning" id="exampleCheck1"/>
        <label className="ms-2 form-check-label" for="exampleCheck1">I agreed to the </label>
        <a href="" className="forget-password fw-medium text-decoration-none" >Term &Conditions </a>
      </div>
      <button type="submit" className="m-3 my-btn rounded-4 ">Sign in</button>
      {/* bottom line start */}
      <div className="line">
        <span className="or_line"></span>
        <span className="or_txt">or</span>
        <span className="or_line"></span>
      </div>
      {/* bottom line end */}
      <div className=" button-div"> 
      <FcGoogle className="google-icon" />
        <button className="btn-google bg-white  border rounded-4">Sign in with Google</button>
        <FaSquareFacebook className="facebook-icon"/>
        {/* <FaSquareFacebook /> */}
         <button className="btn-facebook rounded-4 ">Sign in with Facebook</button>
      </div>
      <div className="form-footer mt-4 d-flex align-items-center justify-content-center">
        <span>Already have account?</span>
        <a href="">Sign in</a>
      </div>
      </form>
  </div>
    </div>
    </div>
 


</>  )
}

export default Register