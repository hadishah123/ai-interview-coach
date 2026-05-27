import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f0f0f]/80 backdrop-blur-md shadow-lg shadow-black/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          AI Interview Coach
        </Link>

        <div className="flex items-center gap-5">
          <button className="rounded-xl border border-white/10 px-5 py-2 transition hover:bg-white/5 hover:scale-105">
            Login
          </button>

          <button className="group relative overflow-hidden rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/20">
            <div className="absolute inset-0 bg-linear-to-r from-gray-200 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative z-10">Get Started</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
