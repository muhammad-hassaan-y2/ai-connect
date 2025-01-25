"use client"

import { useState } from "react"
import { Header } from "next/dist/lib/load-custom-routes"
import { Footer } from "@/components/Footer"
import { ChatbotAgent } from "@/components/ChatbotAgent"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [userName, setUserName] = useState("User") // In a real app, this would come from your auth state
  const router = useRouter()

  const handleLogout = () => {
    // Here you would typically clear the auth state
    console.log("Logging out...")
    router.push("/")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome, {userName}!</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
        <ChatbotAgent />
      </main>
      <Footer />
    </div>
  )
}

