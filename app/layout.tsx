import type { Metadata } from "next";
import { Fredoka } from "next/font/google";

import Header from "@/components/header/Header";

import "./globals.css";

const fredoka = Fredoka({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sharemeals",
  description: "Share your meals with others",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
