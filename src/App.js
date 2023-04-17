import React, { useState } from "react";
import GoogleLoginButton from "./GoogleBtn";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSuccess = (tokenId) => {
    setIsAuthenticated(true);
    console.log(`Logged in with token ${tokenId}`);
  };

  const handleFailure = (error) => {
    console.error(error);
  };

  return (
    <div className="w-[100%] h-[100vh] bg-[#fff]">
      {isAuthenticated ? (
        <p>You are logged in with Google.</p>
      ) : (
        <GoogleLoginButton
          onSuccess={handleSuccess}
          onFailure={handleFailure}
        />
      )}
    </div>
  );
}

export default App;
