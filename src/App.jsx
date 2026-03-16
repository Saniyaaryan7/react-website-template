import { useState } from 'react'
import React, { Suspense } from 'react'

import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Navbar from './Components/Webpage/Navbar/Navbar'
import Footer from './Components/Webpage/Footer/Footer'

const Home = React.lazy(() => import( "./pages/Home"));
const About = React.lazy(() => import( "./pages/About"));
const Contact = React.lazy(() => import( "./pages/Contact"));
const Services = React.lazy(() => import( "./pages/Services"));




// import About from './pages/About'
// import Contact from './pages/Contact'
// import Services from './pages/Services'

function App() {
  
  return (
    <>
      
      <BrowserRouter>
      <Navbar/> 

<Suspense fallback={<h1>Loading...</h1>}>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
</Suspense>
      <Footer/>   
      </BrowserRouter>
    </>
  )
}

export default App
