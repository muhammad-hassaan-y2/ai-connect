<<<<<<< HEAD
import Hero from "@/hero";
import Image from "next/image";
=======
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
>>>>>>> d1fcd79e3964fe761b0acb24299dfa3013419de6

export default function HomePage() {
  return (
<<<<<<< HEAD
    <Hero/>
  );
=======
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome to Netwrokind Chatbot</h1>
        <p className="text-center text-lg mb-8">Experience the power of AI-driven networking assistance.</p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
>>>>>>> d1fcd79e3964fe761b0acb24299dfa3013419de6
}

