import React from 'react'


// TODO
// -label and button spacing
// -logic


const Register = () => {
  return (
      <div>
          <h1 class="header">Registration</h1>
          <div class = "register">
          <div class="labels">
              <label type="text" for="firstname"><b>First Name: </b></label>
                  <label type="text" for="lastname"><b>Last Name: </b></label>
                  <label type="text" for="username"><b>Username: </b></label>
                  <label type="text" for="password"><b>Password: </b></label>
          </div>
          <div class="boxes">
              <input type="name" placeholder="Enter name"></input>
              <input type="name" placeholder="Enter name"></input>
              <input type="name" placeholder="Enter username"></input>
              <input type="password" placeholder="Enter password"></input>
              </div>
          </div>
          <button type="reg">Sign Up</button>
      </div>
  )
}

export default Register