import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const stackSans = localFont({ 
  src: "../public/Fonts/StackSansNotch-VariableFont_wght.ttf", 
  variable: "--font-stack-sans" 
});

export const metadata: Metadata = {
  title: "I AM IT Technologies – Cybersecurity, Cloud & IT Solutions",
  description:
    "I AM IT Technologies is a global IT services provider delivering cybersecurity, cloud, infrastructure, and digital transformation solutions across India, UAE, Qatar, and Oman.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${stackSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
