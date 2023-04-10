import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const [sidebar, setSideBar] = useState(false)

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
                    {/* <SearchOutlineIcon /> */}
                </li>
            </ul>
           </div>
        </div>
    </header>
  )
}

export default Header