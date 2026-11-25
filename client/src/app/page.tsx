import type { Metadata } from "next";
import HomeHero from "@/app/components/home-hero";

export const metadata: Metadata = {
  title: "ProblemEx | Everyday Problem-Solving",
  description:
    "ProblemEx turns real-life challenges into practical, usable solutions. Explore everyday problems and ideas that can help solve them.",
  keywords: [
    "ProblemEx",
    "real-life problems",
    "everyday challenges",
    "practical solutions",
    "problem solving",
  ],
};

export default function Home() {
  return <HomeHero />;
}
