import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AppsIcon from '@mui/icons-material/Apps';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [sidebar, setSideBar] = useState(false)

    window.addEventListener('scroll', function() {
        const header = document.querySelector(".header")
        header.classList.toggle("active")
    })

  return (
    <header className='header'>
        <div className="container">
            <div className="logo">
                <h3>Logo</h3>
            </div>
           
           <div className="nav">
            <ul className={sidebar ? "nav-links-sidebar" :  "nav-links"}
                onClick={() => setSideBar(false)}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/pages">Pages</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link> 
                </li>
                <li className="icon">
                    <SearchIcon className="HeaderIcon" /> 
                    <BusinessCenterIcon className="HeaderIcon" />
                    <AppsIcon className="HeaderIcon" />
                </li>
            </ul>
           </div>
           <button className="navbar-items-icon" onClick={() => setSideBar(!sidebar)}>
            {sidebar ? <CloseIcon /> : <MenuIcon /> }
           </button>
        </div>
    </header>
  )
}

export default Header