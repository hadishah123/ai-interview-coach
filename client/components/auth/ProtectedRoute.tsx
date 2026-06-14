"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, initialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // 🔥 WAIT until auth is ready
    if (initialized && !user) {
      router.replace("/login");
    }
  }, [initialized, user, router]);

  // 🔥 CRITICAL: block rendering until auth is known
  if (!initialized) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) return null;

  return <>{children}</>;
}