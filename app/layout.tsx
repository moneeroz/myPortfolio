import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moneer's Portfolio",
  description: "moneer's web dev portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-5xl mx-auto py-10`}>
        <header>
          <Navbar />
        </header>

        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
