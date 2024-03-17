import React from 'react'
import SidebarMenu from '../Sidebar-logo/SidebarLogo.jsx';
import SidebarCards from '../Sidebar-cards/SidebarCards.jsx';
import SidebarLogo from '../Sidebar-menu/SidebarMenu.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../HomePageBefore.jsx'




const SidebarFull = () => {
  return (
    <div className="Sidebar">
         <SidebarMenu/>
        <SidebarCards/>
    <SidebarLogo/>
</div>  )
}

export default SidebarFull