import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0f0f0f] px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#151515] p-8">
        
        <h1 className="mb-2 text-3xl font-bold">
          Create Account
        </h1>

        <p className="mb-8 text-gray-400">
          Start preparing for interviews with AI.
        </p>

        <SignupForm />
      </div>
    </main>
  );
}