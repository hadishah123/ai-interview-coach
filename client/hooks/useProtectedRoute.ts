"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/store/AuthContext";

const useProtectedRoute = () => {
  const router = useRouter();

  const { user } = useAuth();
  // If the Auth context does not provide a loading flag, assume not loading.
  const loading = false;

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, router, loading]);

  return {
    user,
    loading,
  };
};

export default useProtectedRoute;
