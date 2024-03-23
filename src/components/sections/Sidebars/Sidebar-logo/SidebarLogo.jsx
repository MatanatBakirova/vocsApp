// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from '../../../../assets/images/Logo.svg'


const SidebarLogo = () => {
    return (
        <div className='sidebar-logo'>
            <a href=""><img src={Logo} alt="" className="img"/></a>
            <span className="vocsapp_text ">VocsApp</span>
        </div>

    )
}

export default SidebarLogo