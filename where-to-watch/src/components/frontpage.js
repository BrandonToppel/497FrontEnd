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
            Use the searchbar to look up a title.
            <br></br>
            <br></br>
            Can't decide what to watch? Click below to let us help.
            <br></br>
            <button class="btn_front" onClick={randomPick}>Surprise me</button>
          </div>
        <img className="Image" src={FrontImage}></img>
    </div>
  )
}

//Function to help randomly pick a list of movies by generating a number
// and searching the number
function randomPick() {
  var RandomNumber = Math.floor(Math.random() * 100 + 1)
  sessionStorage.removeItem("search");
  sessionStorage.setItem("search", RandomNumber.toString());
  window.location.href = "https://localhost:3000/moviedetails";
}
export default frontpage