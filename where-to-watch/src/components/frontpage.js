import React from 'react'

const FrontImage = require('./nicolas-j-leclercq-fg00hP0VPI8-unsplash.jpg')

const frontpage = () => {
  return (
    <div>
        This is the Home Page
        <img className="Image" src={FrontImage}></img>
    </div>
  )
}

export default frontpage