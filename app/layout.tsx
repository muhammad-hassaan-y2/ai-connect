import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/Header"; // Import the Header component
import { Footer } from "@/components/Footer"; // Import the Footer component

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
        <Header /> {/* Include the Header component */}
        <main>{children}</main> {/* Main content goes here */}
        <Footer /> {/* Include the Footer component */}
        <Toaster />
      </body>
    </html>
  );
}