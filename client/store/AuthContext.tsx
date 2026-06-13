"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type User = {
  token: string | null;
};

type AuthContextType = {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext =
  createContext<AuthContextType | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] =
    useState<User | null>(null);

  // Load auth ONLY on client
  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    
    const token = localStorage.getItem("token");
    setUser(token ? { token } : null);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
};