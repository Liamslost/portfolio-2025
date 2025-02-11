import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {



  return (
    <>
      <BrowserRouter>
        <Link to="/" className="opacity-0 absolute">Home</Link>
        <Link to="/about" className="h-fit w-fit text-2xl text-text-primary font-semibold p-4 m-2 my-26 absolute bottom-0 rotate-270 ">About</Link>
        <Link to="/contact" className="h-fit w-fit text-2xl text-text-primary font-semibold p-6 my-12 absolute rotate-90 right-0 ">Contact</Link>
        <Link to="/projects" className=" h-fit w-fit text-2xl text-text-primary font-semibold p-4 my-18 absolute bottom-0 right-12 ">Projects</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
