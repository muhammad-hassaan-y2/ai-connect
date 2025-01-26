import Link from "next/link"
import { Bell, Activity, BarChart2, Settings, Network } from "lucide-react"

export default function Dashboard() {
  return (
    <div
      className="min-h-screen p-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/--CjJcdFBNJcjFjRd6FwwJpRB3jwebCe.png')`,
      }}
    >
      <header className="mb-8 relative">
        <div className="absolute top-0 right-0">
          <Link href="/login" className="text-white hover:text-blue-200 transition-colors">
            Login
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-white text-center">NetMonitor Pro</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card title="Network Health" icon={<Network className="h-6 w-6" />} href="/network-health" />
        <Card title="Alert Status" icon={<Bell className="h-6 w-6" />} href="/alert-status" />
        <Card title="Performance Analysis" icon={<BarChart2 className="h-6 w-6" />} href="/performance" />
        <Card title="Settings" icon={<Settings className="h-6 w-6" />} href="/settings" />
      </div>
    </div>
  )
}

function Card({
  title,
  icon,
  href,
}: {
  title: string
  icon: React.ReactNode
  href: string
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg p-6 transition-all duration-300 ease-in-out"
      style={{ backgroundColor: "#227f9d" }}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="bg-white rounded-full p-4 flex items-center justify-center">
          <div className="text-black">{icon}</div>
        </div>
        <h2 className="text-xl font-semibold text-white transition-colors duration-300 ease-in-out">{title}</h2>
      </div>
      <style jsx>{`
        .block:hover {
          background-color: #ed843b !important;
        }
        .block:hover h2 {
          color: #020917;
        }
      `}</style>
    </Link>
  )
}

