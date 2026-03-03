import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import CursorFollower from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koyang | Fullstack Developer Building Scalable Web Applications",
  description:
    "Koyang Abass is a fullstack developer specializing in scalable web applications, modern frontend systems, and high-performance backend architecture. Explore projects, technical expertise, and professional experience.",
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: "Koyang Abass",
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-fragment-mono antialiased w-screen overflow-x-hidden`}
      >
        <main className="w-full bg-primary-black">
         <CursorFollower />
          {children}
        </main>
      </body>
    </html>
  );
}
