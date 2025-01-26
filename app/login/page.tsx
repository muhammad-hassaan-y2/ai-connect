import { Footer } from "@/components/Footer"
import { AuthForm } from "@/components/AuthForm"

export default function LoginPage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#020617]"
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/--73dCYeqK4Imf5ONk3myVKjZNodKZal.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">Login to NetMonitor Pro</h1>
          <div className="bg-[#227f9d]/90 p-8 rounded-lg shadow-lg">
            <AuthForm mode="login" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}