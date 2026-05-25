import Navbar from "../src/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center py-32 text-center">
        <h1 className="text-6xl font-bold">
          Crack Interviews with AI
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400">
          Upload your resume, get AI-powered feedback,
          and practice personalized mock interviews.
        </p>

        <button className="mt-8 rounded-xl bg-white px-6 py-3 text-black font-semibold hover:opacity-90">
          Get Started
        </button>
      </section>
    </main>
  );
}