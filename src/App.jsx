import './App.css'
// import{ BrowserRouter, Route, Routes} from 'react-router-dom'
import All from '../src/pages/All';
import {BrowserRouter} from "react-router-dom";



function App() {

  return (
    <>
      <BrowserRouter>
        <All/>
      </BrowserRouter>
    </>
  )
}

export default App
