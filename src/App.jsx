import './App.css'
import Login from '../src/components/Login'
import Register from './components/Register'
import RegisterFill from './components/RegisterFill'
import UpdatePassword from './components/UpdatePassword'
import SuccsesfullyUpdate from './components/SuccsesfullyUpdate'
import HomePageBefore from './components/HomePageBefore'
import { Layout } from 'antd'




const {Header, Sider}=Layout;
function App() {

  return (
    <>
    <div className="container">

     <Login/>
      <Register/>
      <RegisterFill/>
      <UpdatePassword/>
      <SuccsesfullyUpdate/>
      <HomePageBefore/>
    

    </div>

     
    </>
  )
}

export default App
