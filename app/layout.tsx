import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/Footer"; 
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NetMonitor Pro", // Update the title to reflect your application
  description: "Advanced network monitoring solutions to keep your systems running smoothly.", // Update the description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
        <Navbar />
        <main>{children}</main> {/* Main content goes here */}
        <Footer /> {/* Include the Footer component */}
        <Toaster />
        <ToastContainer />

        </Providers>
      </body>
    </html>
  );
}