import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mir Faizaan Sajjad | Cybersecurity Portfolio",
  description:
    "Security operations, detection engineering, threat hunting, and incident response portfolio.",
  keywords: [
    "Mir Faizaan Sajjad",
    "SOC Analyst",
    "SIEM",
    "Detection Engineering",
    "Incident Response",
    "Threat Hunting",
    "Endpoint Security",
    "Cybersecurity Portfolio",
  ],
  authors: [{ name: "Mir Faizaan Sajjad" }],
  creator: "Mir Faizaan Sajjad",
  openGraph: {
    title: "Mir Faizaan Sajjad | Cybersecurity Portfolio",
    description:
      "SOC operations, SIEM, detection engineering, incident response, threat hunting, and endpoint security portfolio.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Mir Faizaan Sajjad | Cybersecurity Portfolio",
    description:
      "SOC operations, SIEM, detection engineering, incident response, threat hunting, and endpoint security portfolio.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<Analytics /></body>
    </html>
  );
}
