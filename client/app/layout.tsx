import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/store/AuthContext";
import Navbar from "@/components/layout/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "AI Interview Coach",
  description: "AI-powered interview preparation platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <AuthProvider>

          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </AuthProvider>
      </body>
    </html>
  );
}