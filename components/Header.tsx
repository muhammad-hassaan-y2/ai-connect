import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-[#227f9d]/90 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            NetMonitor Pro
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/dashboard" className="hover:text-white/80">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/alerts" className="hover:text-white/80">
                  Alerts
                </Link>
              </li>
              <li>
                <Link href="/settings" className="hover:text-white/80">
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-white border-white hover:bg-white/20">
              Log In
            </Button>
            <Button className="bg-white text-[#227f9d] hover:bg-white/90">Sign Up</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

