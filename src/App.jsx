import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { Copyright, Dot } from "lucide-react";
import { useState } from "react";

function App() {

const [isHome, setIsHome] = useState(true);



  return (
    <div className="bg-primary">
      <BrowserRouter>
      <div className={`${ isHome ? "" : "float-right mr-30 pt-8"} `}>
        <Link to="/" className={`${ isHome ? "hidden" : "p-6 "}  h-fit w-fit text-2xl text-text-primary font-semibold `}
        onClick={() => setIsHome(true)}>
          Home
        </Link>
        <Link
          to="/about"
        className={`${ isHome ? " p-4 m-2 my-26 absolute bottom-0 rotate-270 z-1" : "p-6 "} h-fit w-fit text-2xl text-text-primary z-0 font-semibold `}
        onClick={() => setIsHome(false)}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`${ isHome ? " p-6 my-12 absolute rotate-90 right-0 " : "p-6 "}  h-fit w-fit text-2xl text-text-primary font-semibold `}
          onClick={() => setIsHome(false)}
        >
          Contact
        </Link>
        <Link
          to="/projects"
          className={`${ isHome ? " p-4 my-18 absolute bottom-0 right-12 " : " p-6 "} h-fit w-fit text-2xl text-text-primary font-semibold `}
          onClick={() => setIsHome(false)}
        >
          Projects
        </Link>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
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
    </div>
  );
}

export default App;
