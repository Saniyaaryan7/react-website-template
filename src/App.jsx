import { useState } from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from './Components/Webpage/Navbar/Navbar'

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
      </BrowserRouter>
    </>
  )
}

export default App
