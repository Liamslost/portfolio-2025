import { Copyright, Dot } from "lucide-react"
import { useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();
const isHome = location.pathname === "/";
    return(
        <footer className="text-text-primary bg-secondary pl-10 py-4 min-h-12 flex justify-between block">
        <div className="flex">
          <Copyright className="text-black mr-1" />
          2025
          <Dot />
          Colophon
        </div>
        <div className={`flex space-x-25 mr-60 ${isHome ? "hidden" : ""}`}>
          <div className="space-y-2">
            <h3 className="mb-5 font-bold">Find Me</h3>
            <a className="block font-extralight">GitHub</a>
            <a className="block font-extralight">LinkedIn</a>
            <a className="block font-extralight">Figma</a>
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