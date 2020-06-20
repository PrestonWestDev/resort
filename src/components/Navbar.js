import React, { useState, Component } from 'react';
import logo from '../images/logo.svg';

// @react-icons is great because we can get access to all icons through generic paths:
import {FaAlignRight} from 'react-icons/fa';
// import {MdHome} from 'react-icons/md';
// import {BsHouse} from 'react-icons/bs'
// import {FaWarehouse} from 'react-icons/fa'

import { A } from 'hookrouter';


const Navbar = ({}) => {

    const [isOpen, setIsOpen] = useState(true);

        return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                 <A href="/">
                    <img src={logo} alt="Beach Resort"></img>
                 </A>
                    <button type="button" className="nav-btn" onClick={() => setIsOpen(!isOpen)}>
                        <FaAlignRight className="nav-icon"></FaAlignRight>
                    </button>
                </div>
                {/* This uses CSS tricks show links in the navbar w/ overflow and added height values */}
                <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <A href="/">Home</A>
                    </li>
                    <li>
                        <A href="/rooms">Rooms</A>
                    </li>
                </ul>
            </div>
        </nav>
        )
}


export default Navbar;