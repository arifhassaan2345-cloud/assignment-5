import{useState} from"react"
import logo from "../../assets/logo-text.png"
function Navbar() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        

  {/* Mobile Menu Button */}
  <button
    type="button"
    onClick={() => setMenuOpen(!menuOpen)}
    className="md:hidden text-2xl text-gray-700"
  >
    ☰
  </button>

  

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
          src={logo}
          alt="Dev Stack"
          className="h-10 w-auto object-container"
        />
        </a>
        {/* Mobile Menu Button */}


        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            Contact
          </a>
        </div>

        {menuOpen && (
  <div className="absolute left-0 right-0 top-full border-t border-gray-100 bg-white p-5 shadow-md md:hidden">
    <div className="flex flex-col gap-4">
      <a href="#" onClick={() => setMenuOpen(false)}>Home</a>

      <a
        href="#technologies"
        onClick={() => setMenuOpen(false)}
      >
        Technologies
      </a>

      <a href="#" onClick={() => setMenuOpen(false)}>Projects</a>

      <a href="#" onClick={() => setMenuOpen(false)}>About</a>

      <a href="#" onClick={() => setMenuOpen(false)}>Contact</a>
    </div>
  </div>
)}

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden text-sm font-medium text-gray-700 transition hover:text-orange-500 sm:block"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:shadow-md"
          >
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar