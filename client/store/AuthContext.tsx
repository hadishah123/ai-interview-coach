"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

type User = {
  token: string | null;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(
    () => {
      if (typeof window === "undefined") {
        return null;
      }

      const token =
        localStorage.getItem("token");

      return token ? { token } : null;
    }
  );

  const loading = false;

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
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return context;
};