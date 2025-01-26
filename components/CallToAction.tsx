import { Button } from "./ui/button"

export default function CallToAction() {
  return (
    <div className="bg-cyan-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-cyan-300">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Get started
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button
              variant="outline"
              className="bg-white text-cyan-700 hover:bg-cyan-50 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

