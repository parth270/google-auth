import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onSuccess, onFailure }) => {
  const clientId = '2184570337-8dokcf2pq3b5chtgcoeom8gajmt29qrn.apps.googleusercontent.com';

  const handleSuccess = (response) => {
    const { tokenId } = response;
    onSuccess(tokenId);
  };

  const handleFailure = (error) => {
    console.error(error);
    onFailure(error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      buttonText="Sign in with Google"
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;