import Link from "next/link"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/--qbUl5zy2H8CnrRcQZ9Xlm0LEvLN6HX.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
          Network Alarm System
        </h1>
        <p className="text-lg md:text-xl text-cyan-200 mb-8">
          Advanced monitoring and alert system for your network infrastructure
        </p>
        <div className="flex justify-center space-x-4">
          <Link href='/login'>
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
            Get Started
          </Button></Link>
          
          <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-cyan-900 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}
