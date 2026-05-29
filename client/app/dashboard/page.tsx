"use client";

import useProtectedRoute from "@/hooks/useProtectedRoute";
import { useRouter } from "next/navigation";

import { useAuth } from "@/store/AuthContext";
export default function DashboardPage() {
  const router = useRouter();

  const { logout } = useAuth();
  const { loading } = useProtectedRoute();

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0f0f0f] text-white">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] p-10 text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <button
          onClick={() => {
            logout();

            router.push("/login");
          }}
          className="rounded-xl bg-red-500 px-5 py-2"
        >
          Logout
        </button>
      </div>

      <p className="mt-4 text-gray-400">Authentication successful.</p>
    </main>
  );
}
