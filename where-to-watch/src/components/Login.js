import React from 'react'


// TODO
// -label and button spacing
// -logic


const Login = () => {
  return (
      <div>
          <h1 class="header">Login</h1>
          <div class="login">
          <div>
              <label type="text" for="username"><b>Username: </b></label>
              <label type="text" for="password"><b>Password: </b></label>
          </div>
          <div class="boxes">
            <input type="name" placeholder="Enter username"></input>
            <input type="password" placeholder="Enter password"></input>
              </div>
          </div>
          <button type="log">Login</button>
    </div>
  )
}

export default Login