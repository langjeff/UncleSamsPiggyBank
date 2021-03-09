import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import API from '../../utils/API';
// refresh token

const clientId =
  '899511652234-cls2folp54noje6mq3njs0c6f8ubqg9s.apps.googleusercontent.com';

function Login() {
  const [user, setUser] = useState();
  const [userSearch, setUserSearch] = useState("");

  const onSuccess = (res) => {
    //TODO send a request to DB to identify the user,
    // *If the user exists pass back the info
    // *If user doens't exist create user in DB
    console.log(`Login Success for ${res.profileObj.email}`);
    //* this will be used once checkUser is working
    // setUserSearch(res.profileObj);
    //* this is to validate post is working
    setUser(res.profileObj);
    // checkUser();
    saveUser();
  };
    // checks to see if user exists in database
    // if YES return results of that user
    // if NO save new user and data then return results of that user
    
    //* saveUser works when called
    function saveUser() {
      // event.preventDefault();
      console.log(user.email);
      API.saveUser({
        username: user.email
      })
      // .then(res => loadUser())
      .then(res => console.log(res))
      .catch(err => console.log(err));
    };

    // call function to check if user exists in database
    // useEffect(() => {
    //   checkUser()
    // }, [])

    // function checks to see if user exists
    //* checkUser is still a work in progress. Need to work out 
    // function checkUser(e) {
    //   e.preventDefault();
    //   API.getUser(userSearch)
    //     .then(res => setUser(res.data))
    //     console.log(user)
    //     .catch(err => console.log(err));
    //     // filter search by email to see if they exist
    //     // if (user !== res.profileObj.email) {
    //     //   // if user does not exist call saveUser function to save data
    //     //   saveUser()
    //     // }
    //     // else {
    //     //   // if user exists call loadUser function to display data
    //     //   loadUser()
    //     // }
    // };
    // function saves users data if they do not exist


    // function loads users data
    // function loadUser(id) {
    //   API.getUser(id)
    //     .then(res => setUser(res.data))
    //     .catch(err => console.log(err));
    // };
  

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