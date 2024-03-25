// eslint-disable-next-line no-unused-vars
import React from 'react'
import LessonsLevels from './LessonsLevels'
import LessonCards from './LessonCards'
import Header from "../../Header.jsx";


const Lessons = () => {
  return (
    <div>
        <Header/>
        <LessonsLevels/>
        <LessonCards/>
    </div>
  )
}

export default Lessons