import React from 'react'
import home from '../assets/home.png'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    
    <nav className="navbar bg-info">
        <div className="container-fluid">
            <Link to="/" style={{textDecoration: 'none',color: 'inherit'}}>
            <img src={home} className="d-inline-block align-text-top" alt="..." style={{width: '60px'}}/>
            </Link>
        </div>
    </nav>
  )
}

export default NavBar