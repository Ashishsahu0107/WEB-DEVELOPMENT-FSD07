import React from 'react'
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <nav className='flex justify-between px-12 h-15 items-center bg-orange-400'>
                <h2 className='text-black-900 capitalize text-3xl '>logo</h2>
                <div className='flex gap-6 text-md'>
                    <Link to='/' className='text-decoration-none text-white'>Hero</Link>
                    <Link to="/about" className='text-decoration-none text-white'>About</Link>
                    <Link to="/skills" className='text-decoration-none text-white'>Skills</Link>
                    <Link to="/projects" className='text-decoration-none text-white'>Projects</Link>
                </div>
                <div className='text-md flex gap-3'>
                    <Link to='/login' className='px-3 py-2 border border-blue-500 hover:bg-blue-500 rounded-md text-white text-decoration-none'>Login</Link>
                    <Link to='/register' className='px-3 py-2 bg-blue-500 rounded-md text-white text-decoration-none'>Register</Link>
                </div>
            </nav>
        </>
    )
}

export default Header