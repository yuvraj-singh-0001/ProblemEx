import type { Metadata } from "next";
import Footer from "@/app/components/footer/footer";
import { HomeCardsReturnMarker } from "@/app/components/problem-card-navigation/problem-card-navigation";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "ProblemEx",
    template: "%s | ProblemEx",
  },
  description:
    "ProblemEx turns real-life challenges into practical, usable solutions.",
  keywords: ["ProblemEx", "real-life problems", "problem solving"],
  openGraph: {
    siteName: "ProblemEx",
    title: "ProblemEx | Practical Skills for Real-Life Problems",
    description: "Explore practical skills and Situational Knowledge for navigating real-life challenges.",
    type: "website",
    images: [{ url: "/problemEx.png", alt: "ProblemEx practical learning programme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProblemEx | Practical Skills for Real-Life Problems",
    description: "Explore practical skills and Situational Knowledge for navigating real-life challenges.",
    images: ["/problemEx.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <HomeCardsReturnMarker />
        {children}
        <Footer />
      </body>
    </html>
  );
}
