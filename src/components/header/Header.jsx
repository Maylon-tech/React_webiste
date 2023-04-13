import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

import SearchOutlineIcon from '@mui/icons-material/SearchOutlineIcon'
import WorkIcon from '@mui/icons-material/Work'
import GridViewIcon from '@mui/icons-material/GridView';

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
                    <SearchOutlineIcon /> 
                    <WorkIcon />
                    <GridViewIcon />
                </li>
            </ul>
           </div>
        </div>
    </header>
  )
}

export default Header