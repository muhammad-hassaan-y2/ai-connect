export default function Testimonials() {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-cyan-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by industry leaders
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "CTO, TechCorp",
                content:
                  "The Network Alarm System has revolutionized how we monitor our infrastructure. It's a game-changer for our operations.",
              },
              {
                name: "Michael Chen",
                role: "Network Engineer, GlobalNet",
                content:
                  "I've never seen such a comprehensive and user-friendly monitoring solution. It's made my job so much easier.",
              },
              {
                name: "Emily Rodriguez",
                role: "IT Director, InnovateCo",
                content:
                  "The real-time alerts have saved us countless hours and prevented several potential network disasters. Highly recommended!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-500" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  