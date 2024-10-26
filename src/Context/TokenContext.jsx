import React, { createContext, useState, useEffect } from 'react';

// Create the TokenContext
export const TokenContext = createContext();

// TokenProvider component that will wrap the app and provide the token globally
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Load token from localStorage on component mount
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // Save token to localStorage and update context state
  const saveToken = (userToken) => {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  // Remove token from both state and localStorage
  const removeToken = () => {
    localStorage.removeItem('userToken');
    setToken(null);
  };

  return (
    <TokenContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </TokenContext.Provider>
  );
};
