import React from 'react'
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import {faTv} from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



const Nav = () => {
  return (
    <div>
        <h1>Where to watch</h1>
        <ul className='top_nav'>
            <NavLink to="/" className={({isActive}) => (isActive ? 'active' : 'inactive')}><li>Home</li></NavLink>
            <NavLink to="/Login" className={({isActive}) => (isActive ? 'active' : 'inactive')}><li>Login</li></NavLink>
            <NavLink to="/Register" className={({isActive}) => (isActive ? 'active' : 'inactive')}><li>Register</li></NavLink>
            <FontAwesomeIcon icon={faCircleUser} className="fa-Circle-User" color="black" size='xl'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTv} className="fa-Tv" color="black" size='xl'></FontAwesomeIcon>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-Maginifying-Glass" color="black" size='xl'></FontAwesomeIcon>
        </ul>

    </div>
  )
}

export default Nav