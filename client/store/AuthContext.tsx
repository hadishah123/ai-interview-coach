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
  initialized: boolean;
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

  const [initialized, setInitialized] =
    useState(false);

  // 🔥 load auth AFTER mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    /* eslint-disable react-hooks/set-state-in-effect */
    setUser(token ? { token } : null);
    setInitialized(true);
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
        initialized,
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