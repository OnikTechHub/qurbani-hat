import dns from 'node:dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import 'animate.css';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "QurbaniHat | Find Your Perfect Animal", 
  description: "The best collection of healthy cows and goats for Qurbani.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Navbar />
        <main className="min-h-screen">
          <Toaster position="top-center" />
          {children}</main>
        <Footer />
      </body>
    </html>
  );
}
