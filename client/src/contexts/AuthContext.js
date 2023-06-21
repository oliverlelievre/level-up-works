import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const getUserData = JSON.parse(userData);
    if (getUserData) {
      setToken(getUserData.token);
      setRole(getUserData.role);
      setEmail(getUserData.userEmail);
      setUserId(getUserData.userID);
    }

  }, []);

  const login = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));


    setIsLoggedIn(true);
    setToken(userData.token);
    setRole(userData.role);
    setEmail(userData.userEmail);
    setUserId(userData.userID);

    localStorage.setItem('token', userData.token);
    localStorage.setItem('role', userData.role);
    localStorage.setItem('email', userData.userEmail);
    localStorage.setItem('user_id', userData.userID);
    // localStorage.setItem('isLoggedIn', isLoggedIn);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken(null);
    setRole(null);
    setEmail(null);
    setUserId(null);

    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('user_id');
    // localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ token, setToken, role, setRole, email, setEmail, userId, setUserId, isLoggedIn, setIsLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
