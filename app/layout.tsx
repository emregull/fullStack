import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageContextProvider from "./context/page-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OctoHaus / Emre GUL",
  description: "Full Stack Developer - Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageContextProvider>{children}</PageContextProvider>
      </body>
    </html>
  );
}
