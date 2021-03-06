import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import API from '../../utils/API';
// refresh token

const clientId =
  '899511652234-cls2folp54noje6mq3njs0c6f8ubqg9s.apps.googleusercontent.com';

function Login() {
  const [user, setUser] = useState();
  const onSuccess = (res) => {

    //TODO send a request to DB to identify the user,
    // *If the user exists pass back the info
    // *If user doens't exist create user in DB
    console.log('Login Success: currentUser:', res);
    alert(
      `Logged in successfully welcome ${res.profileObj.email} 😍. \n See console for full profile object.`
    );
    // checks to see if user exists in database
    // if YES return results of that user
    // if NO save new user and data then return results of that user
    
    // call function to check if user exists in database
    useEffect(() => {
      checkUser()
    }, [])

    // funciton checks to see if user exists
    function checkUser() {
      API.getUser()
        // filter search by email to see if they exist
        if (user !== res.profileObj.email) {
          // if user does not exist call saveUser function to save data
          saveUser()
        }
        else {
          // if user exists call loadUser function to display data
          loadUser()
        }
    };

    // function saves users data if they do not exist
    function saveUser() {
      API.saveUser()
        .then(res => loadUser())
        .catch(err => console.log(err));
    };

    // funciton loads users data
    function loadUser(id) {
      API.getUser(id)
        .then(res => setUser(res.data))
        .catch(err => console.log(err));
    };
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  return (
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
  );
}

export default Login;