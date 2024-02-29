import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "./Providers";
import Profile from "./components/Profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project Buzz",
  description: "Made with ❤️ by Parthib & Swastika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Profile />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
