import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
              🔐 Welcome Back
            </div>

            <h1 className="text-3xl font-bold text-slate-900">
              Sign In
            </h1>

            <p className="mt-2 text-slate-500">
              Continue your AI interview journey and access your dashboard.
            </p>
          </div>

          <LoginForm />

          <p className="mt-6 text-center text-sm text-slate-500">
            New here?{" "}
            <a
              href="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-700"
            >
              Create account
            </a>
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Practice interviews. Improve confidence. Get hired.
        </p>
      </div>
    </main>
  );
}