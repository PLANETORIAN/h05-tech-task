import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { integralCF } from './font'
import { satoshi } from './font'

import Navbar from "./components/Navbar"; 
import Footer from "./components/Foot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${integralCF.variable} ${satoshi.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
