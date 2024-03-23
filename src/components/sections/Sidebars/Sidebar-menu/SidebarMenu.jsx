import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {GoHome, GoStar, GoShareAndroid} from "react-icons/go";
import {IoBookOutline, IoSettingsOutline,} from "react-icons/io5";
import {LuBookMinus} from "react-icons/lu";
import { Link } from 'react-router-dom';


const SidebarMenu = () => {
  return (
    <div className='menu'>
    <ul className='menu-links mt-4'>
        <li className='nav-links '>
            <a href="" className=''>
                <GoHome className='icon'/>
                <span className=' active-menu'>Main Page</span>
            </a>

        </li>
        <li className='nav-links'>
            <Link to="Lesson">
                <LuBookMinus className='icon'/>
                <span className='text'>Lesson</span>
            </Link>

        </li>
        <li className='nav-links'>
            <a href="">
                <IoBookOutline className='icon'/>
                <span className='text'>Books</span>
            </a>

        </li>
        <li className='nav-links'>
            <a href="">
                <GoStar className='icon'/>
                <span className='text'>Add Premium</span>
            </a>

        </li>
        <li className='nav-links'>
            <a href="">
                <IoSettingsOutline className='icon'/>
                <span className='text'>Settings</span>
            </a>

        </li>
        <li className='nav-links'>
            <a href="">
                <GoShareAndroid className='icon'/>
                <span className='text'>Share</span>
            </a>

        </li>
    </ul>
</div>  )
}

export default SidebarMenu