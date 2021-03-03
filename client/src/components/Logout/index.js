import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '899511652234-cls2folp54noje6mq3njs0c6f8ubqg9s.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;