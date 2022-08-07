import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faTv } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// TODO
// -watchlist button event
// -Logo is underlined because it's in a NavLink (fixable?)
// -cleanup?

const Nav = () => {
    return (
        <nav class="top_nav">
           
            <ul class="menu">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> <div class="logo">Where to Watch</div> </NavLink>
                <div class="searchbar">
                    <input type="text" placeholder="Search for a movie or show..."></input>
                    <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
                </div>
                <div class="nav_buttons">
                    <div class="user_icon">
                        <FontAwesomeIcon icon={faCircleUser} className="fa-Circle-User" color="black" size='xl'></FontAwesomeIcon>
                        <ul class="login_dropdown">
                            <li>
                                <NavLink to="/Login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li>Login</li></NavLink>
                            </li>
                            <li>
                                <NavLink to="/Register" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li>Register</li></NavLink>
                            </li>
                        </ul>
                    </div>
                    <div class="tv_icon">
                        <FontAwesomeIcon icon={faTv} className="fa-Tv" color="black" size='xl'></FontAwesomeIcon>
                    </div>
                </div>
            </ul>

        </nav>
    )
}

export default Nav