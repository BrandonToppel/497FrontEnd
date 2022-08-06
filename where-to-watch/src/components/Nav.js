import React from 'react'
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import {faTv} from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// TODO
// -positions
// -logo onclick event to homepage
// -nav button spacing
// -dropdown for user icon
// -login & register links to dropdown
// -dropdown events
// -watchlist button event

const Nav = () => {
  return (
    <nav class="top_nav">
        <div class="logo" onclick="">Where to Watch</div>
        <ul class="menu">
            <NavLink to="/" className={({isActive}) => (isActive ? 'active' : 'inactive')}><li>Home</li></NavLink>
            <div class="searchbar">
              <input type="text" placeholder="Search for a movie or show..."></input>
              <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
            </div>
            <div class="nav_buttons">
                <FontAwesomeIcon icon={faCircleUser} className="fa-Circle-User" color="black" size='xl'></FontAwesomeIcon>
                <ul class="dropdown">
                    <NavLink to="/Login" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li>Login</li></NavLink>
                    <NavLink to="/Register" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><li>Register</li></NavLink>
                </ul>      
                <FontAwesomeIcon icon={faTv} className="fa-Tv" color="black" size='xl'></FontAwesomeIcon>
            </div>
        </ul>

    </nav>
  )
}

export default Nav