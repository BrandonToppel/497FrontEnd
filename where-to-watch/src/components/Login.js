import React from 'react'


// TODO
// -spacing
// -logic


const Login = () => {
  return (
    <div class="login">
          <div>
            <label for="username"><b>Username: </b></label>
            <input type="name" placeholder="Enter username"></input>
          </div>
          <div>
            <label for="password"><b>Password: </b></label>
            <input type="password" placeholder="Enter password"></input>
          </div>
          <button type="submit">Login</button>
    </div>
  )
}

export default Login