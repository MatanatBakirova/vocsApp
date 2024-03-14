import ai from "../assets/images/ai.svg";
import coin from "../assets/images/coin.svg";
import ring from "../assets/images/ring.svg";
import React from 'react'

const Header = (props) => {
    return (
        <header className="header">
            <div className='header-button'>
                <button className='btn btn-outline-primary '>Sign in</button>
                <button className='btn btn-outline-primary'>Sign up</button>
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