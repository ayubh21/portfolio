import ResumeFile from "../assets/ayub-resume.pdf"
import GithubIcon from "../assets/github.svg"
import LinkedinInIcon from "../assets/linkedin-svgrepo-com.svg"
import X from "../assets/x.svg"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
]

export default function Navbar() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center justify-between gap-6 w-full max-w-2xl rounded-full border border-[#2a2a2a] bg-[#141414]/90 backdrop-blur-md px-6 py-3 shadow-lg shadow-black/30">
        <a href="#home" className="font-bold text-white text-lg shrink-0">
          Ayub
        </a>
        <ul className="hidden sm:flex items-center gap-8 text-sm text-[#c5c5c5]">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 shrink-0">
          <a href="https://github.com/ayubh21" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} width={20} height={20} alt="GitHub" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
          </a>
          <a href="https://linkedin.com/in/ayubhussein21" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinInIcon} width={20} height={20} alt="LinkedIn" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
          </a>
          <a href="https://x.com/AyubHus40421689" target="_blank" rel="noopener noreferrer">
            <img src={X} width={20} height={20} alt="X" className="opacity-70 hover:opacity-100 transition-opacity duration-200" />
          </a>
          <a
            href={ResumeFile}
            download
            className="text-sm font-medium bg-white text-black rounded-full px-4 py-1.5 hover:bg-gray-200 transition-colors duration-200"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}
