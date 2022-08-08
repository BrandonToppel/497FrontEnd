import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams, Link} from 'react-router-dom';

const Movie = () => {
    const [movie, setMovies] = useState([]);

    const {title} = useParams();
    title.split('movie', "")
    title.split('%20', " ")


    const fetchMovies = () => {
        const options = {
          method: 'GET',
          headers: {
            //TODO ADD KEY. Key is not here for repo purposes in testing add key.
            'X-RapidAPI-Key': 'a67c1b0763msh0d15be1ae2de758p14e812jsn32666a1cf878', 
            'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
          }
        };
        
        fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&keyword=' + title.split('20%', " "), options)
          .then(response =>  {
            return response.json()
          })
          .then(data => { 
            console.log(data.results);
            setMovies(data.results)
          })
          .then(response => console.log(response))
          .catch(err => console.error(err));
      }
    
      useEffect(() => {
        fetchMovies()
      }, [])
    
  return (
    <div>
        {movie.length > 0 && (
        <ul className='Movie'>
          {movie.map(movies => (
            <li key={movies.imdbID}> <img className='moviePosters' src={movies.posterURLs.original}/> {movies.originalTitle} {movies.overview} <button onClick={() => this.AddToWatchList.bind(movies)}>Add to Watchlist</button></li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default Movie