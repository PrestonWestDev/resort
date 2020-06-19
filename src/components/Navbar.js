import React, { Component } from 'react';
import logo from '../images/logo.svg';

// @react-icons is great because we can get access to all icons through generic paths:
import {FaAlignRight} from 'react-icons/fa';
// import {MdHome} from 'react-icons/md';
// import {BsHouse} from 'react-icons/bs'
// import {FaWarehouse} from 'react-icons/fa'

import { A } from 'hookrouter';


export default class Navbar extends Component {
    state={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                 <A href="/">
                    <img src={logo} alt="Beach Resort"></img>
                 </A>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                        <FaAlignRight className="nav-icon"></FaAlignRight>
                    </button>
                </div>
                {/* This uses CSS tricks show links in the navbar w/ overflow and added height values */}
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
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
}
