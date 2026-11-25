import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { problemSections } from "@/app/problem-sections";

type ProblemPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return Array.from({ length: 16 }, (_, index) => ({
    id: String(index + 1),
  }));
}

function isValidProblemId(id: string) {
  const number = Number(id);
  return Number.isInteger(number) && number >= 1 && number <= 16;
}

function getProblemTitle(id: string) {
  return problemSections[Number(id) - 1] ?? `Problem ${id}`;
}

export async function generateMetadata({
  params,
}: ProblemPageProps): Promise<Metadata> {
  const { id } = await params;

  if (!isValidProblemId(id)) {
    return { title: "Problem not found" };
  }

  return {
    title: getProblemTitle(id),
    description: `${getProblemTitle(id)} — a ProblemEx learning section.`,
    keywords: ["ProblemEx", getProblemTitle(id), "real-life problems"],
  };
}

export default async function ProblemPage({ params }: ProblemPageProps) {
  const { id } = await params;

  if (!isValidProblemId(id)) {
    notFound();
  }

  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-x-clip bg-gradient-to-br from-[#f7f9fc] via-white to-[#eef7f0] px-4 py-8 sm:py-12">
      <section className="w-full max-w-3xl rounded-3xl border border-[#dce6ed] bg-white/90 px-6 py-10 text-center shadow-[0_24px_80px_rgba(16,43,80,0.10)] sm:px-12 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#159447]">
          ProblemEx · Section {String(Number(id)).padStart(2, "0")}
        </p>
        <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[#102b50] sm:text-5xl">
          {getProblemTitle(id)}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
          This ProblemEx section is ready for its learning content.
        </p>
        <Link
          className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-[#102b50] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#102b50]/15 transition duration-200 hover:-translate-y-0.5 hover:bg-[#159447] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#159447]"
          href="/"
        >
          <span aria-hidden="true" className="mr-2">←</span>
          Back to ProblemEx
        </Link>
      </section>
    </main>
  );
}
