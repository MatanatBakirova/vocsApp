import React,{useState} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import HomePageBefore from '../components/HomePageBefore'
import SidebarFull from '../components/sections/Sidebars/SidebarFull/SidebarFull'


const All = () => {

  return (

    
<div className="page container-fluid pt-3">
<BrowserRouter>
<SidebarFull/>
    <Routes>
        <Route path='/' element={<HomePageBefore/>}/>
        <Route path='/Sign-in' element={<Login/>}/>
        <Route path='/Sign-up' element={<Register/>}/>
    </Routes>
  </BrowserRouter>
    </div>

  
  )
}

export default All