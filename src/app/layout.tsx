import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomenjanahary Mamitiana — Développeur Backend Python & Systèmes Intelligents",
  description:
    "Portfolio professionnel de Nomenjanahary Mamitiana — Développeur spécialisé Backend, Python, FastAPI et Systèmes Intelligents. Smart City, LDAP, Sécurité, Analyse de trafic.",
  keywords: [
    "Nomenjanahary Mamitiana",
    "Développeur Backend",
    "Python",
    "FastAPI",
    "Smart City",
    "LDAP",
    "Sécurité",
    "Backend",
  ],
  authors: [{ name: "Nomenjanahary Mamitiana" }],
  icons: {
    icon: "/profile-placeholder.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
