import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Swaroopa Portfolio",
  description:
    "Full-Stack Developer specializing in modern web apps. Projects, skills, experience, and contact.",
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "Portfolio"
  ],
  openGraph: {
    title: "Swaroopa Portfolio",
    description:
      "Modern portfolio showcasing full-stack projects, skills, and experience.",
    url: "https://example.com",
    siteName: "Portfolio",
    images: [
      {
        url: "/images/og-card.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview"
      }
    ],
    type: "website"
  },
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
