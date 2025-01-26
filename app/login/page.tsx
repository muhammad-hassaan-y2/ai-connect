import { AuthForm } from "@/components/AuthForm";
import { Shield, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Shield size={48} className="text-blue-600 inline-block mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Login to NetMonitor Pro</h1>
            <p className="mt-2 text-gray-600">
              Secure access to your network monitoring dashboard
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="mb-6 flex items-center justify-center text-blue-600">
              <Lock size={24} className="mr-2" />
              <span className="text-sm font-semibold">Secure Login</span>
            </div>
            <AuthForm mode="login" />
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up here
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
