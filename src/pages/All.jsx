// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import HomePageBefore from '../components/HomePageBefore'
import SidebarFull from '../components/sections/Sidebars/SidebarFull/SidebarFull'


const All = () => {
    const location = useLocation();

    const showSidebar = location.pathname === '/' || location.pathname === '/some-other-path';

    return (

        <div className="page container-fluid pt-3">
            {showSidebar && <SidebarFull />}
            <Routes>
                <Route path='/' element={<HomePageBefore/>}/>
                <Route path='/Sign-in' element={<Login/>}/>
                <Route path='/Sign-up' element={<Register/>}/>
            </Routes>
        </div>

    )
}

export default All