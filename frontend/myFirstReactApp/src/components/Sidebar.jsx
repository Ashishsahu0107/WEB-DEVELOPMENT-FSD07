import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
      <>

          <div className='grid items-center justify-center min-h-150 gap-4 w-20 bg-orange-400'>
              <Link to={"/"}>Home</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/Skills"}>Skills</Link>
              <Link to={"/projects"}>Projects</Link>
          </div>
          
      </>
  )
}

export default Sidebar