import { Button } from 'antd';
import React, { useState } from 'react'
import { useEffect } from 'react';
import {BrowserRouter as Router,
Link} from 'react-router-dom';

const MovieDetails = (props) => {
  console.log(props);

  const[movie, setMovie] = useState("");
  //AddToWatchList accomplishes two goals. It adds a movie that does not exist in the local database
  // To that database. Then it will add that movie to the users watchlist if the user is logged in. 
  async function AddToWatchList(movies) {
    const uri = 'https://localhost:44376/api/Movies';

    const newMovie = {
      MovieTitle: movies.originalTitle,
      Description: movies.overview
    };
    //Use the username is the session storage to use as our user
    const user =  {
      Username: sessionStorage.getItem('WatchUser').trim(),
    };
    console.log(user);
    //watchlist assembly to be transferd to backend.
    const watchlist = {
      Users: {
        Username: user.Username,
      },
      Movies: {
        MovieTitle: newMovie.MovieTitle,
      }
    };
    console.log(watchlist);
    //Fetch to add movie to local database
     fetch(uri, {
      method: 'POST',
      credentials:'include',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMovie)
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.error(err));
  
    const newUri = 'https://localhost:44376/api/Watchlists'
    //fetch to add movie to watchlist
    await fetch('https://localhost:44376/api/Watchlists', {
      method: 'POST',
      credentials:'include',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(watchlist)
    })
    .then(response => {
      return response.json();
    })
    .catch(err => console.error(err));
  }
  //function that calls external API to see which movies are on which streaming service. 
  const fetchMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        //TODO ADD KEY. Key is not here for repo purposes in testing add key.
        //Key and host for external API 
        //IF THESE TWO VALUES ARE NOT HERE THE MAIN FEATURE WILL NOT WORK. 
        
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };
    
    //URL to call for external API
    fetch('https://streaming-availability.p.rapidapi.com/search/ultra?country=us&services=netflix%2Chulu%2Chbo%2Cdisney%2Cpeacock%2Capple%2Cparamount&type=movie&order_by=imdb_vote_count&keyword=' + sessionStorage.getItem("search"), options)
      .then(response =>  {
        return response.json()
      })
      .then(data => { 
        console.log(data.results);
        setMovie(data.results)
      })
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchMovies()
  }, [])
  //Display movies found in search by mapping them to an array
  return(
    <div>
      {movie.length > 0 && (
        <ul className='Movie'>
          {movie.map(movies => (
            <li key={movies.imdbID} className='movieslist'> <img className='moviePosters' src={movies.posterURLs.original}/> <h1 id='movieTitle'>{movies.title}</h1> <p id='movieDescription'>{movies.overview}</p>
            <h2 id='streamingInfo'>{Object.keys(movies.streamingInfo).join(' ')}</h2><button id='AddToWatchListBtn' onClick={() => AddToWatchList(movies)}>Add to Watchlist</button></li>
          ))}
        </ul>
      )}
    </div>
  )

  }

  
export default MovieDetails