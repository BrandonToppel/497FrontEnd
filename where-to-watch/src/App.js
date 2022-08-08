import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
//import Nav from './components/Nav';
import Login from './components/Login'
import Register from './components/Register';
import MovieDetails from './components/MovieDetails';
import Movie from './components/Movie';
import Frontpage from './components/frontpage';
import { NavLink, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faTv } from "@fortawesome/free-solid-svg-icons"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Watchlist from './components/Watchlist';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Router>
      <nav class="top_nav">
            <ul class="menu">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}> <div class="logo">Where to Watch</div> </NavLink>
                <div class="searchbar">
                    <input type="text" placeholder="Search for a movie or show..." id='user-search-textbox' onChange={event => setSearch(event.target.value)}></input>
                    <button type="submit" onClick={userSearch}><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
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
      {/* <Nav/> */}
        <Routes>
          <Route path='/' element={<Frontpage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/moviedetails' element={<MovieDetails event={search}/>} />
          <Route path='/movie/:title' element={<Movie/>} />
          <Route path='/WatchList' element={<Watchlist />} />
        </Routes>
      </Router>
    </div>
  );
}

function userSearch() {
  const titleSearch = document.getElementById("user-search-textbox").value.trim();
  sessionStorage.removeItem("search");
  sessionStorage.setItem("search", titleSearch);
  window.location.href = "https://localhost:3000/moviedetails";
}
export default App;
