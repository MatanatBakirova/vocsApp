import React from 'react'
import '../Lessons/Lesson.css'
import ai from '../../../assets/images/ai.svg'
import coin from '../../../assets/images/coin.svg'
import ring from '../../../assets/images/ring.svg'
import profilPhoto from '../../../assets/images/profilPhoto.svg'
const LessonName = () => {
  return (
     <div>
    <header className="header">
  <div className='header-name'>
    <div className='lesson-profile'>
      <img src={profilPhoto} alt="" />
      <div className='lesson-names'>
      <span className='fw-bold mb-1'>Gunel Zakiyeva</span>
      <span className='text-secondary'>@gunelZakiyeva</span>
      </div>
    </div>
  </div>

  <div className='header-nav-element d-flex'>
      <div className='images-logo d-flex gap-2'>
          <img src={ai} alt=""/> <span className='d-flex justify-contet-center align-items-center fw-bold pe-1'>30</span>
          <img src={coin} alt=""/><span className='d-flex justify-contet-center align-items-center fw-bold pe-1'>30000</span>
          <img src={ring} alt=""/>
      </div>
  </div>
</header>
</div>
  )
}

export default LessonName