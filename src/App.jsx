import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Payment from './components/Payment'
import Footer from './components/Footer'
import Signup from './components/Signup'
import Login from './components/Login'





const App = () => {
  return (
    
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Payment/>      
      <Signup/>
      <Login/>
      <Footer/>
      
     
    </div>
   
  )
}

export default App