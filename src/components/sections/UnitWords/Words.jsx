import React , {useState} from 'react'
import './Words.css'
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";


const Words = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const speakWord = () => {
    // Web Speech API'sını kullanarak belirli bir metni seslendir
    const speech = new SpeechSynthesisUtterance(props.word);
    window.speechSynthesis.speak(speech);
    setIsPlaying(true)
  };
  const pauseSpeech = () => {
    window.speechSynthesis.pause();
    setIsPlaying(false); // Seslendirme durdurulduğunda isPlaying'i false yap
  };


  return (
    <div>
    <div>
    <ul className="words nav justify-content-between p-2 align-items-center ">
      <div className='word-components ps-2 gap-2 d-flex align-items-center'>
      <li className="nav-item">
       <a className="nav-link ciplay1 bg-primary text-white rounded-circle" aria-current="page" href="#">
       {isPlaying ? (
                  <CiPause1 onClick={pauseSpeech} style={{ width: "25px", height: "25px" }} />
                ) : (
                  <CiPlay1 onClick={speakWord} style={{ width: "25px", height: "25px" }} />
                )}
       </a>
</li>
<li className="nav-item"style={{width: "200px"}}>
<a className=" nav-link pe-3" href="#">{props.word}</a>
</li>
</div>


<div className='translate'>
<li className="nav-item text-center"style={{width: "200px"}}>
<a class="" href="#" >{props.translate}</a>
</li>
</div>

<div className='learned-componet d-flex '>
<li className="nav-item">
<a className="nav-link" href="#">Learned</a>
</li>
<div className='words-edit d-flex pe-3 gap-2'>
<ul>
    <li>
        <a href="#"><FiEdit /></a>
    </li>
</ul>
            
<ul>
    <li>
 <a href="#"><FaTrashAlt /></a>
    </li>
    </ul>
    </div>
</div>
</ul>
</div>
    </div>
  )
}

export default Words