"use client";

import { useState } from "react";
import Link from "next/link";

import { useAuth } from "@/store/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { user, logout } = useAuth();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold"
        >
          <span className="text-indigo-600">
            AI
          </span>

          <span className="text-slate-900">
            Interview Coach
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">

          <Link
            href="/dashboard"
            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
          >
            Dashboard
          </Link>

          {user && (
            <>
              <Link
                href="/resume"
                className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
              >
                Resume
              </Link>

              <Link
                href="/interview"
                className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
              >
                Interview
              </Link>
            </>
          )}

          {!user ? (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">

              {/* <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div> */}

              <button
                onClick={logout}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-slate-700 md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="space-y-3 border-t bg-white px-6 py-4 md:hidden">

          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="block text-sm font-medium text-slate-600 hover:text-indigo-600"
          >
            Dashboard
          </Link>

          {user && (
            <>
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-slate-600 hover:text-indigo-600"
              >
                Resume
              </Link>

              <Link
                href="/interview"
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-slate-600 hover:text-indigo-600"
              >
                Interview
              </Link>
            </>
          )}

          {!user ? (
            <>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block text-sm font-medium text-slate-600 hover:text-indigo-600"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="block rounded-xl bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="w-full rounded-xl border border-slate-200 px-4 py-2 text-left text-sm font-medium text-slate-600"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}