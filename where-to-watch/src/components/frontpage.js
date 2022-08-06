import React from 'react'

const FrontImage = require('./nicolas-j-leclercq-fg00hP0VPI8-unsplash.jpg')


// TODO
// -reshape image to match design document
// -button event 

const frontpage = () => {
  return (
    <div class="frontpage">
          <div>
            Find the streaming service that has your favorite movie!
            Use the searchbar or click below to let us help.
            <br></br>
            <button class="btn_front">Surprise me</button>
          </div>
        <img className="Image" src={FrontImage}></img>
    </div>
  )
}

export default frontpage