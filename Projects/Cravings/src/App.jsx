import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from './pages/Hero'
import Header from './components/Header'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={ <Hero/> } />
          <Route path='/login' element={ <Login/> } />
          <Route path='/register' element={ <Register/> } />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;