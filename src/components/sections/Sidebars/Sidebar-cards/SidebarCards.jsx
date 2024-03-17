import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import VocAI from '../../../../assets/images/VocAI-img.svg'
import frame from '../../../../assets/images/frame.svg'
import award from '../../../../assets/images/award.svg'


const SidebarCards = () => {
  return (
    <div className="container">
    <div className="sidebar-cards d-flex gap-2">
        <div className='bottom-card'>
            <div className='blue-card'>
                <div className='card-in'>
                    <img src={frame} alt=""/>
                </div>
                <div className='VocAI d-flex align-items-center justify-content-center'>
                    <span className='VocAI-chat'>VocAI Chat</span>
                    <img src={VocAI} alt=""/>
                </div>
                <button className='button-start bg-white rounded-pill'>Start</button>
            </div>
        </div>
        <div className='bottom-card2'>
            <div className='orange-card'>
                <div className='card-in'>
                    <img src={frame} alt=""/>
                </div>
                <div className='VocAI d-flex align-items-center justify-content-center'>
                    <span className='Test-img'>Test yourself by level</span>
                    <img src={award} alt="" className='award-img'/>
                </div>
                <button className='button-start bg-white rounded-pill'>Start</button>
            </div>
        </div>
    </div>
</div>  )
}

export default SidebarCards