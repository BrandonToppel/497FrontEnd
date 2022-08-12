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
            <input type="name" placeholder="Enter username" id='username-textbox'></input>
            <input type="password" placeholder="Enter password" id='password-textbox'></input>
              </div>
          </div>
          <button type="log" onClick={login}>Login</button>
    </div>
  )
}

function login() {
  //api call
  const uri = 'https://localhost:44376/api/account/Login';
  //variables are each of the text boxes to get the data out of them
  const usernameTextbox = document.getElementById('username-textbox');
  const passwordTextbox = document.getElementById('password-textbox');
  
  //a variable that will be built by the information from the text boxes
  const user = {
    Username: usernameTextbox.value.trim(),
    password: passwordTextbox.value.trim(),
  };

  // Fetch API that connects to our backend to determine whether a user is logs in. 
   fetch(uri, {
    method: 'POST',
    credentials:'include',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => {
    if(!response.ok) {
      let error = document.getElementById('failed-login')
      error.style.visibility = 'visible';
    }
    
    //If user login is a success we go back to the homepage, and stores the username in sessionStorage
    else {
      window.location.href = "https://localhost:3000";
      sessionStorage.setItem("WatchUser", user.Username);
    }
  })
  
  }

export default Login