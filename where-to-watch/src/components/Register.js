import React from 'react'


// TODO
// -spacing
// -logic


const Register = () => {
  return (
      <div class="register">
          <div>
              <label for="firstname"><b>First Name: </b></label>
              <input type="name" placeholder="Enter username"></input>
          </div>
          <div>
              <label for="lastname"><b>Last Name: </b></label>
              <input type="name" placeholder="Enter username"></input>
          </div>
          <div>
              <label for="username"><b>Username: </b></label>
              <input type="name" placeholder="Enter username"></input>
          </div>
          <div>
              <label for="password"><b>Password: </b></label>
              <input type="password" placeholder="Enter password"></input>
          </div>
          <button type="submit">Sign Up</button>
      </div>
  )
}

export default Register