// eslint-disable-next-line no-unused-vars
import React from 'react'
import SidebarMenu from '../Sidebar-logo/SidebarLogo.jsx';
import SidebarCards from '../Sidebar-cards/SidebarCards.jsx';
import SidebarLogo from '../Sidebar-menu/SidebarMenu.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

const SidebarFull = () => {
    return (
        <div className="Sidebar">
            <SidebarMenu/>
            <SidebarCards/>
            <SidebarLogo/>
        </div>)
}

export default SidebarFull