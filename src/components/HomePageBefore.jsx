import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './HomePageBefore.css'
import 'swiper/swiper-bundle.css';
import Books from './sections/Books/Books.jsx'
import Levels from "./sections/Levels/Levels.jsx";
import Header from "./Header.jsx";
import SidebarFull from './sections/Sidebars/SidebarFull/SidebarFull.jsx';

const HomePageBefore = () => {



    return (
        // <div className="">
            <div className='homepage'>
                <Header/>
                <Levels key="levels"/>
                <Books/>

            </div>
        // </div>
    )
}

export default HomePageBefore