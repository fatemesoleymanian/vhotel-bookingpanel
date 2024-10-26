import React, { useContext } from 'react';
import { TokenContext } from './context/TokenContext';

const Dashboard = () => {
  const { token, saveToken, removeToken } = useContext(TokenContext);

  // Example usage
  const handleLogin = () => {
    const userToken = 'newToken'; // Assume this comes from an API login response
    saveToken(userToken);
  };

  const handleLogout = () => {
    removeToken();
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {token ? (
        <div>
          <p>Logged in with token: {token}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default Dashboard;
