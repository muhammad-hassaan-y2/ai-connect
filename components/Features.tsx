import { Shield, Zap, Bell } from "lucide-react"

const features = [
  {
    name: "Real-time Monitoring",
    description: "Monitor your network infrastructure in real-time with advanced analytics and visualizations.",
    icon: Zap,
  },
  {
    name: "Instant Alerts",
    description: "Receive instant notifications when issues are detected, allowing for quick response and resolution.",
    icon: Bell,
  },
  {
    name: "Secure & Reliable",
    description: "Built with security in mind, ensuring your network data is protected and always accessible.",
    icon: Shield,
  },
]

export default function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to monitor your network
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our Network Alarm System provides cutting-edge features to keep your infrastructure secure and efficient.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-cyan-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

