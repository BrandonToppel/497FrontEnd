import React, { useState } from 'react'
import { useEffect } from 'react';

const MovieDetails = (props) => {
  console.log(props);

  const[movie, setMovie] = useState("");
  const fetchMovies = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a67c1b0763msh0d15be1ae2de758p14e812jsn32666a1cf878',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };
    
    fetch('https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&keyword=' + sessionStorage.getItem("search"), options)
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
            <li key={movies.imdbID}> <img className='moviePosters' src={movies.posterURLs.original}/> {movies.originalTitle} {movies.overview}</li>
          ))}
        </ul>
      )}
    </div>
  )

  }
export default MovieDetails