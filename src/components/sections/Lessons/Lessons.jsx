// eslint-disable-next-line no-unused-vars
import React from 'react'
import LessonCards from './LessonCards'
import Header from "../../Header.jsx";
import Levels from '../Levels/Levels.jsx';


const Lessons = () => {
  return (
    <div>
        <Header/>
        <Levels/>
        <LessonCards/>
    </div>
  )
}

export default Lessons