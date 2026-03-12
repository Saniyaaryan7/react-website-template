import { useState } from 'react'
import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from './Components/Webpage/Navbar/Navbar'
import Footer from './Components/Webpage/Footer/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'

function App() {
  
  return (
    <>
      
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>

      <Footer/>   
      </BrowserRouter>
    </>
  )
}

export default App
