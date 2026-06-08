"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link
          href="/dashboard"
          className="text-xl font-bold"
        >
          AI Interview Coach
        </Link>

        <div className="flex gap-6">
          <Link href="/dashboard">
            Dashboard
          </Link>

          <Link href="/resume">
            Resume
          </Link>

          <Link href="/interview">
            Interview
          </Link>
        </div>
      </div>
    </nav>
  );
}