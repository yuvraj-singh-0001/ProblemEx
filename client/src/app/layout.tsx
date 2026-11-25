import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ProblemEx",
    template: "%s | ProblemEx",
  },
  description:
    "ProblemEx turns real-life challenges into practical, usable solutions.",
  keywords: ["ProblemEx", "real-life problems", "problem solving"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
