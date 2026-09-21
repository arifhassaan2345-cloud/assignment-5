
import banner from "../../assets/banner-stack.png"

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">

        {/* Left Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Developer Technology Hub
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Build Your Ideal
            <br />
            <span className="gradient-text">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            Explore modern technologies and create your own personalized
            developer stack. Choose the tools that match your learning
            journey and development goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
  href="#technologies"
  className="gradient-bg rounded-lg px-6 py-3 font-semibold text-white transition hover:shadow-lg"
>
  Explore Technologies
</a>

            <a
            href="#your-stack"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center">
          <img
            src={banner}
            alt="Developer technology stack"
            className="w-full max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero