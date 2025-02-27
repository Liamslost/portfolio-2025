import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="bg-primary">
      <BrowserRouter basename="/portfolio-2025">
     <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
<Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
