import type { Metadata } from "next";

import { Toaster } from "react-hot-toast";

import { AuthProvider } from "@/store/AuthContext";

import "./globals.css";

export const metadata: Metadata = {
  title: "AI Interview Coach",
  description:
    "AI-powered interview preparation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}

          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        </AuthProvider>
      </body>
    </html>
  );
}