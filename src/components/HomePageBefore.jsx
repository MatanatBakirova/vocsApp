// eslint-disable-next-line no-unused-vars
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './HomePageBefore.css'
import 'swiper/swiper-bundle.css';
import Books from './sections/Books/Books.jsx'
import Levels from "./sections/Levels/Levels.jsx";
import Header from "./Header.jsx";
import UnitWords from './sections/UnitWords/UnitWords.jsx';

const HomePageBefore = () => {

    return (
        <div className='homepage'>
            <Header/>
            <Levels key="levels"/>
            <Books/>
            
            {/* <UnitWords/> */}
            </div>
    )
}

export default HomePageBefore