import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <header className='header'>
    <h3>React Router </h3>
    <div>
    <nav>
    <Link to="/" className='link'>Home</Link>
    <Link to="/about" className='link'>About</Link>
    <Link to="/landing" className='link'>Landing</Link>
    </nav>
    </div>
    </header>
    
    </div>
  )
}

export default Navbar