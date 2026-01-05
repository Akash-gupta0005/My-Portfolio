import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './components/home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return ( 
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter> 
  )
}

export default App;