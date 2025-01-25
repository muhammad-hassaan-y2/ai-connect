export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">Network Alarm System</h1>
        <p className="mt-6 text-lg md:text-xl text-cyan-200 max-w-2xl mx-auto">
          Advanced monitoring and alert system for your network infrastructure
        </p>
        <div className="mt-8">
          <button className="bg-cyan-500 hover:bg-[#ed843b] text-white hover:text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

