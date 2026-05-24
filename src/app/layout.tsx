import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, IBM_Plex_Mono } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import { TooltipProvider } from "@/components/ui/tooltip";
import { personal } from "@/data/personal";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${personal.name} — Frontend Engineer`,
  description: personal.bio,
  keywords: [
    "frontend developer",
    "react",
    "next.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name} — Frontend Engineer`,
    description: personal.tagline,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Frontend Engineer`,
    description: personal.tagline,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${ibmPlexMono.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <TooltipProvider delayDuration={200}>
          <CustomCursor />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
