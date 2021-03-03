import React from 'react';
import { GoogleLogin } from 'react-google-login';
// refresh token

const clientId =
  '899511652234-cls2folp54noje6mq3njs0c6f8ubqg9s.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res);
    alert(
      `Logged in successfully welcome ${res.profileObj.email} 😍. \n See console for full profile object.`
    );
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;