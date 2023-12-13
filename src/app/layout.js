import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextAuthSessionProvider from "./provider/NextAuthSessionProvider";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md Najmul Hossen",
  description: "A full-stack developer from Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthSessionProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <div className="min-h-[calc(100vh-120px)]">{children}</div>
          <Footer />
        </body>
      </html>
    </NextAuthSessionProvider>
  );
}
