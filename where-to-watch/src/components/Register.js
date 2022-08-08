import React from 'react'


// TODO
// -label and button spacing
// -logic


//variable to store the backend api uri
const uri = "https://localhost:44376/api/"

const Register = () => {
  return (
      <div>
          <h1 class="header">Registration</h1>
          <div class = "register">
          <div class="labels">
              <label type="text" for="firstname"><b>First Name: </b></label>
                  <label type="text" for="lastname"><b>Last Name: </b></label>
                  <label type="text" for="email"><b>Email: </b></label>
                  <label type="text" for="username"><b>Username: </b></label>
                  <label type="text" for="password"><b>Password: </b></label>
          </div>
          <div class="boxes">
              <input type="name" placeholder="Enter name" id='first-name-textbox'></input>
              <input type="name" placeholder="Enter name" id='last-name-textbox'></input>
              <input type="name" placeholder="Email" id='email-textbox'></input>
              <input type="name" placeholder="Enter username" id='username-textbox'></input>
              <input type="password" placeholder="Enter password" id='password-textbox'></input>
              </div>
          </div>
          <button type="reg" onClick={registerUser}>Sign Up</button>
      </div>
  )
}

//Function to call the web service to register a user
function registerUser() {
    const registerUri = "https://localhost:44376/api/account/register";
    //variables for each textbox to hold their contents
  const firstNameTextBox = document.getElementById('first-name-textbox');
  const lastNameTextbox = document.getElementById('last-name-textbox');
  const emailTextbox = document.getElementById('email-textbox');
  const usernameTextbox = document.getElementById('username-textbox');
  const passwordTextbox = document.getElementById('password-textbox');

  //a variable that will be built by the information from the text boxes
  const user = {
    isComplete: false,
    firstName: firstNameTextBox.value.trim(),
    lastName: lastNameTextbox.value.trim(),
    Email: emailTextbox.value.trim(),
    Username: usernameTextbox.value.trim(),
    password: passwordTextbox.value.trim(),
  };
  //Fetch api call to post the data to the backend
  fetch(registerUri, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(() => {
    console.log("sucess")
  })

}

export default Register