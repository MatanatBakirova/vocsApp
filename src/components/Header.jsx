import ai from "../assets/images/ai.svg";
import coin from "../assets/images/coin.svg";
import ring from "../assets/images/ring.svg";
import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Header = () => {

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

export default Header