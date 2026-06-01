import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Hero from './pages/Hero'
import About from './pages/About'
import Project from './pages/Projects'
import Footer from './components/Footer'
import Skills from './pages/Skills'
import Projects from './pages/Projects';
import Login from './pages/Login'
import Register from './pages/Register'
import Sidebar from './components/Sidebar';

const App = () => {



  return (
    <BrowserRouter>
      <Header />

      <div className='flex'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>


      <Footer />

    </BrowserRouter>
  )
}

export default App;