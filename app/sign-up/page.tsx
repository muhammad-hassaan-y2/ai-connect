import { Footer } from "@/components/Footer"
import { AuthForm } from "@/components/AuthForm"

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Sign Up for Netwrokind</h1>
        <AuthForm mode="signup" />
      </main>
      <Footer />
    </div>
  )
}

