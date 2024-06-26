// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import ai from "../assets/images/ai.svg";
import coin from "../assets/images/coin.svg";
import ring from "../assets/images/ring.svg";
import { Link } from "react-router-dom";
import profilePhoto from "../assets/images/profilPhoto.svg";

const Header = () => {


    const [loginUser, setLoginUser] = React.useState(false);

    if(loginUser === false){
        return (
            <header className="header">
                <div className='header-button'>
                    <Link to="sign-in"><button className='btn btn-outline-primary '>Sign in</button></Link>

                    <Link to="sign-up"><button className='btn btn-outline-primary'>Sign up</button></Link>
                </div>

                <div className='header-nav-element'>
                    <div className='images-logo d-flex gap-2 '>
                        <img src={ai} alt=""/>
                        <img src={coin} alt=""/>
                        <img src={ring} alt=""/>
                    </div>
                </div>
            </header>
        )
    }

    return (
        <header className="header">
            <div className='header-name'>
                <div className='lesson-profile'>
                    <img src={profilePhoto} alt=""/>
                    <div className='lesson-names'>
                        <span className='fw-bold mb-1'>Gunel Zakiyeva</span>
                        <span className='text-secondary'>@gunelZakiyeva</span>
                    </div>
                </div>
            </div>

            <div className='header-nav-element d-flex'>
                <div className='images-logo d-flex gap-2'>
                    <img src={ai} alt=""/> <span
                    className='d-flex justify-contet-center align-items-center fw-bold pe-1'>30</span>
                    <img src={coin} alt=""/><span
                    className='d-flex justify-contet-center align-items-center fw-bold pe-1'>30000</span>
                    <img src={ring} alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header