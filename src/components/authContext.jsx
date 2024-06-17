import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    const userData = Cookies.get("user");
    
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
    setIsLoading(false);  
  }, []);

  const handleLogout = async () => {
    try {
      const token = decodeURIComponent(Cookies.get("token"));

      await axios.delete('https://neobazaar-ee1c625c2e80.herokuapp.com/logout', {
        headers: {
          Authorization: token
        }
      });
    } catch (error) {
      console.error("Logout failed:", error);
    }

    Cookies.remove("token");
    Cookies.remove("user");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/log-in");
  };

  const value = {
    isLoggedIn,
    user,
    setIsLoggedIn,
    setUser,
    handleLogout,
    isLoading  
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
