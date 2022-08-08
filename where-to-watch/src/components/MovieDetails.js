import { Button } from 'antd';
import React, { useState } from 'react'
import { useEffect } from 'react';
import {BrowserRouter as Router,
Link} from 'react-router-dom';

const MovieDetails = (props) => {
  console.log(props);

  const[movie, setMovie] = useState("");

  async function AddToWatchList(movies) {
    const uri = 'https://localhost:44376/api/Movies';
    //a variable that will be built by the information from the text boxes
    const newMovie = {
      MovieTitle: movies.originalTitle,
      Description: movies.overview
    };

    const user =  {
      Username: sessionStorage.getItem('WatchUser').trim(),
    };
    console.log(user);
    const watchlist = {
      Users: {
        Username: user.Username,
      },
      Movies: {
        MovieTitle: newMovie.MovieTitle,
      }
    };
    console.log(watchlist);
    
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

  const fetchMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        //TODO ADD KEY. Key is not here for repo purposes in testing add key.
        , 
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };
    
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

  return(
    <div>
      {movie.length > 0 && (
        <ul className='Movie'>
          {movie.map(movies => (
            <li key={movies.imdbID}> <img className='moviePosters' src={movies.posterURLs.original}/> {movies.title} {movies.overview} <Link to={JSON.stringify(movies.streamingInfo)}>{JSON.stringify(movies.streamingInfo)}</Link><button onClick={() => AddToWatchList(movies)}>Add to Watchlist</button></li>
          ))}
        </ul>
      )}
    </div>
  )

  }

  
export default MovieDetails