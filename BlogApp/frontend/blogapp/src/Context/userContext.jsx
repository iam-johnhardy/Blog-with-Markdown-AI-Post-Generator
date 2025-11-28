
  import React, { createContext, useState, useEffect } from "react";
// import axiosInstance from "../utils/axiosInstance";
// import { API_PATHS } from "../utils/apiPaths";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load user from token on mount
  useEffect(() => {
    if (user) {
      setLoading(false);
      return;
    }

    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        setLoading(true);
        // If your axiosInstance already attaches the token via an interceptor,
        // you don't need to pass headers here. Otherwise uncomment the headers.
        const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE
          , { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        setUser(response.data);
        setError(null);
      } catch (err) {
        console.error("User not authenticated:", err);
        clearUser();
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  const updateUser = (userData) => {
    // If userData contains a token, persist it
    if (userData && userData.token) {
      localStorage.setItem("accessToken", userData.token);
    }
    setUser(userData);
  };

  const clearUser = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    setError(null);
  };

  const login = (userData) => {
    updateUser(userData);
  };

  const logout = () => {
    clearUser();
    // optionally: call backend logout endpoint
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        error,
        updateUser,
        clearUser,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;