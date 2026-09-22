import logo from "../../assets/logo-text.png"

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center">
              <img
                src={logo}
                alt="Dev Stack"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              Build your ideal development stack with modern technologies
              and tools for your learning and development journey.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600 transition hover:bg-gray-200"
              >
                G
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600 transition hover:bg-gray-200"
              >
                X
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-600 transition hover:bg-gray-200"
              >
                in
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900">Product</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>
                <a href="#technologies" className="hover:text-orange-500">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#your-stack" className="hover:text-orange-500">
                  Your Stack
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900">Company</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-gray-900">Legal</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>
  © 2026 Dev Stack. Built with React, TypeScript & Tailwind CSS.
</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-orange-500">
              Privacy
            </a>
            <a href="#" className="hover:text-orange-500">
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer