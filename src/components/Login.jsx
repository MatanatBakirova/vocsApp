// eslint-disable-next-line no-unused-vars
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {MdOutlineEmail} from "react-icons/md";
import {CiLock} from "react-icons/ci";
import {FcGoogle} from "react-icons/fc";
import {FaSquareFacebook} from "react-icons/fa6";
import {IoEyeOutline} from "react-icons/io5";
import WelcomeToVocs from './WelcomeToVocs.jsx';


const Login = () => {
    return (

        <div className="container">
            <div className="d-flex ">
                <WelcomeToVocs/>
                <div className="border-line m-3"></div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <form>
                        <div className="form-div m-3">
                            <MdOutlineEmail className="fa-envelope"/>
                            <input type="email" className="form-control rounded-4" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                        <div className=" form-div m-3">
                            <CiLock className="fa-lock"/>
                            <IoEyeOutline className="eye-icon"/>
                            <input type="password" className="form-control rounded-4" id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <div className="m-3 form-check d-flex ">
                            <input type="checkbox" className="form-check-input border-warning" id="exampleCheck1"/>
                            <label className="ms-2 form-check-label" id="exampleCheck1">keep me signed in</label>
                            <a href="" className="forget-password fw-medium text-decoration-none">Forgot Password?</a>
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
                            <FcGoogle className="google-icon"/>
                            <button className="btn-google bg-white  border rounded-4">Sign in with Google</button>
                            <FaSquareFacebook className="facebook-icon"/>
                            {/* <FaSquareFacebook /> */}
                            <button className="btn-facebook rounded-4 ">Sign in with Facebook</button>
                        </div>
                        <div className="form-footer mt-4 d-flex align-items-center justify-content-center">
                            <span>Have you not account yet?</span>
                            <a href="">Sign up</a>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default Login