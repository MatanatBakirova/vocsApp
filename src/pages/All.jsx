// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes, Route, useLocation,} from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import HomePageBefore from '../components/HomePageBefore'
import SidebarFull from '../components/sections/Sidebars/SidebarFull/SidebarFull'
import Lessons from '../components/sections/Lessons/Lessons'


const All = () => {
    const location = useLocation();

    const showSidebar = location.pathname === '/sign-in' || location.pathname === '/sign-up';

    return (
        <div className='page'>
            {!showSidebar && <SidebarFull/>}
            <Routes>
                <Route path='/' element={<HomePageBefore/>}/>
                <Route path='/Sign-in' element={
                    <div className="login-register-page"> {/* Login sehifesi ucun yeni bir div */}
                        <Login/>
                    </div>
                }/>
                <Route path='/Sign-up' element={
                    <div className="login-register-page"> {/* Register sehifesi ucun yeni bir div */}
                        <Register/>
                    </div>
                }/>
                <Route path='/lesson' element={<Lessons/>}/>
            </Routes>
        </div>
    )
}

export default All