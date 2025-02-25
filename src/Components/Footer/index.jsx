import { Copyright, Dot } from "lucide-react"
import { useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();
const isHome = location.pathname === "/";
    return(
        <footer className="text-text-primary bg-secondary pl-10 py-4 min-h-12 flex justify-between">
        <div className="flex">
          <Copyright className="text-black mr-1" />
          2025
          <Dot />
          <div className="relative inline-block group">
      <span className="cursor-pointer ">Colophon</span>
      
      {/* Tooltip - hidden by default, shown on hover */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="p-2 bg-black text-white text-xs rounded shadow-lg space-y-1">
          <p>Designed in Figma</p>
          <p>Built with React</p>
          <p>Styled with Tailwind</p>
          <p>GitHub for versions</p>
        </div>
      </div>
    </div>
        </div>
        <div className={`space-x-25 mr-60 ${isHome ? "hidden" : "md:flex"} hidden `}>
          <div className="space-y-2">
            <h3 className="mb-5 font-bold">Find Me</h3>
            <a className="block font-extralight"
            href="https://github.com/Liamslost">GitHub</a>
            <a className="block font-extralight"
            href="https://www.linkedin.com/in/liam-o-connell-409243190/">LinkedIn</a>
            <a className="block font-extralight"
            href="https://www.figma.com/@liamoconnell">Figma</a>
          </div>
          <div className="space-y-2">
            <h3 className="mb-5 font-bold">Contact</h3>
            <a className="font-extralight">Message</a>
          </div>
        </div>
      </footer>
    )
}

export default Footer