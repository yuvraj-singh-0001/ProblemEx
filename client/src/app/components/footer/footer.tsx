import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#d4e0e8] bg-white/80 px-5 py-6 text-center text-sm text-slate-600">
      <p>ProblemEx by The True Topper</p>
      <Link className="mt-2 inline-block font-semibold text-[#147b4b] hover:underline" href="/">
        Back to home
      </Link>
    </footer>
  );
}
