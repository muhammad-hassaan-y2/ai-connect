import { AuthForm } from "@/components/AuthForm"
import { Shield, UserPlus } from 'lucide-react'

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Shield size={48} className="text-blue-600 inline-block mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Sign Up for NetMonitor Pro</h1>
            <p className="mt-2 text-gray-600">Start monitoring your network with advanced tools</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="mb-6 flex items-center justify-center text-blue-600">
              <UserPlus size={24} className="mr-2" />
              <span className="text-sm font-semibold">Create Your Account</span>
            </div>
            <AuthForm mode="signup" />
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Log in here
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
