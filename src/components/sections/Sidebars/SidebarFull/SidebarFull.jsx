// eslint-disable-next-line no-unused-vars
import React from 'react'
import SidebarLogo from '../Sidebar-logo/SidebarLogo.jsx';
import SidebarCards from '../Sidebar-cards/SidebarCards.jsx';
import SidebarMenu from '../Sidebar-menu/SidebarMenu.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

const SidebarFull = () => {
    return (
        <div className="Sidebar">
            <SidebarLogo/>
            <SidebarCards/>
            <SidebarMenu/>
        </div>
    )
}

export default SidebarFull