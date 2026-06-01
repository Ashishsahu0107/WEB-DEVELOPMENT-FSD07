import React from 'react'

const Header = () => {
    return (
        <>
            <nav className='flex justify-between px-12 h-15 items-center bg-orange-400'>
                <h2 className='text-orange-600 capitalize'>logo</h2>
                <div className='flex gap-6 text-md'>

                    <a href='#' className='text-decoration-none text-white'>Home</a>

                    <a href="#" className='text-decoration-none text-white'>About</a>
                    <a href="#" className='text-decoration-none text-white'>Skills</a>
                    <a href="#" className='text-decoration-none text-white'>Projects</a>
                </div>
                <div className='text-md flex gap-3 text-white'>
                    <button className='px-3 py-2 bg-secondary rounded rounded-2xl '>Login</button>
                    <button className='px-3 py-2 bg-secondary rounded rounded-2xl'>Register</button>
                </div>
            </nav>
        </>
    )
}

export default Header