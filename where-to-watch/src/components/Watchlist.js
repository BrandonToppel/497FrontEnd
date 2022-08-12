import React, { useState } from 'react'
import { useEffect } from 'react';

  const Watchlist = () => {
  const[movie, setMovie] = useState("");
      //api call
  const uri = 'https://localhost:44376/api/watchlists/GetWatchlist';
  const fetchWatchlist = () => {
     fetch(uri, {
        method: 'GET',
        credentials:'include',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })
      .then(response =>  {
        return response.json()
      })
      .then(data => { 
        setMovie(data)
        console.log(data);
      })
      .then(response => console.log(response))
      .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchWatchlist()
        }, [,])
        let index = 0;
        return(
            <div>
              {movie.length > 0 && (
                <ul className='Movie'>
                  {movie.map(movies => (
                    <li key={index}> {JSON.stringify(movies)}</li>
                  ))}
                </ul>
              )}
              </div>
        )    
  }
  

export default Watchlist