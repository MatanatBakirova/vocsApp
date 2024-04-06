import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import LessonWordHeader from '../UnitWords/LessonWordHeader';
import Words from './Words';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const UnitWords = () => {
  const[wordsList, setWordsList]=useState([]);
  const {bookId,unitId,} = useParams(); 



  useEffect(()=> {

    

    
    const USER_TOKEN ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLnZvY2FidWxhcnkuYXovYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3MTIyMTI4NDYsImV4cCI6MTczNTU0MDg0NiwibmJmIjoxNzEyMjEyODQ2LCJqdGkiOiJ6VHBsYnphaTZ0cGVuN3VtIiwic3ViIjoiOTU3OCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.FPh38cqsmX-jd15Hg4ncB7DPuEImyfk7hz1On1agYXA'

    const api = 'https://api.vocabulary.az/api/books/'+bookId+'/units/'+unitId+'/words'
    // console.log(api)

    axios.get(api,
      {
      headers: {
        'Authorization': `Bearer ${USER_TOKEN}`
    }
  }

  )
    
    .then(response => {
      setWordsList(response.data.data);
    }
  )
  .catch((err) => {
      console.log('Serverdə xəta: ' + err);
  })

  },[unitId,bookId])
  
  return (
    <>
    <div>
        <section className="lesson-words  ">

          <div className='common-component d-flex  '>
            <div className='lesson-word-name d-flex align-items-center justify-content-center'>
           
           <span className='fw-semibold fs-3 '>Lesson Name</span>
           </div>
           <div className='button-components d-flex gap-2'>
           <div className='lesson-hidewords'>
            <input className='hidebutton  ps-2 text-secondary' placeholder="Hide words"></input>
           <div className="form-check form-switch switcher ">
         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
         </div>   
         </div>
            <div className=' lesson-translateword ms-'>
            <input className='hidebutton  ps-2 text-secondary' placeholder="Hide translate"></input>
           <div className="form-check form-switch switcher ">
         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
           </div>
           </div>


           <ul className=' components d-flex gap-2 ps-2 '>
                <li>
                    <a href=""className='plus-words text-secondary'><GoPlus /></a>
                </li>
                <li>
                    <a href=""className='search-words text-secondary'><CiSearch /></a>
                </li>
                </ul>
                </div>
        </section>
        <LessonWordHeader/>
        <div className='coll-12'>
            { wordsList && wordsList.map(wordData =>(
               <Words key={wordData.id}
               word={wordData.word}
               translate={wordData.translate}
    
               
               
               /> 

            ))
           }
           </div>

    </div>

    </>


  )
}


export default UnitWords