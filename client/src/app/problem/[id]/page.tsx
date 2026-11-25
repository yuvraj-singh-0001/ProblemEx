import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

export async function generateMetadata({
  params,
}: ProblemPageProps): Promise<Metadata> {
  const { id } = await params;

  if (!isValidProblemId(id)) {
    return { title: "Problem not found" };
  }

  return {
    title: `Button ${id}`,
    description: `ProblemEx placeholder page for Button ${id}.`,
    keywords: ["ProblemEx", `Button ${id}`, "real-life problems"],
  };
}

export default async function ProblemPage({ params }: ProblemPageProps) {
  const { id } = await params;

  if (!isValidProblemId(id)) {
    notFound();
  }

  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <h1 className="bg-gradient-to-r from-cyan-200 to-violet-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl">
        Button {id}
      </h1>
      <Link
        className="mt-8 rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-300 hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        href="/"
      >
        Back to ProblemEx
      </Link>
    </main>
  );
}
