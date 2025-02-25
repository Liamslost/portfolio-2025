import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about"
  const isContact = location.pathname === "/contact"
  const isProjects = location.pathname === "/projects"
  

  return (
    <>
      <div className={`${isHome ? "hidden" : "flex pt-10"}`}>
        <img src="public/mini-avatar.png" alt="avatar" className="size-20 ml-15 "/>
      <h1 className="text-text-primary text-5xl p-4 font-semibold">
          Hi. I&apos;m Liam
        </h1>
      </div>
      <div className={`${isHome ? "" : "float-right mr-30 absolute right-0 top-19"} `}>
        <Link
          to="/"
          className={`${
            isHome ? "hidden" : "p-6 "
          }  h-fit w-fit text-2xl text-text-primary `}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            isHome ? " p-4 m-2 my-26 absolute bottom-0 rotate-270 " : " p-6 transition-[letter-spacing] duration-500"
          } ${ isAbout ? " tracking-[0.5rem] uppercase font-semibold transition-[letter-spacing] duration-500" : ""} h-fit text-2xl text-text-primary `}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`${
            isHome ? " p-6 my-12 absolute rotate-90 right-0 " : " p-6 transition-[letter-spacing] duration-500 "
          }  ${ isContact ? " tracking-[0.5rem] uppercase font-semibold " : ""} h-fit w-fit text-2xl text-text-primary `}
        >
          Contact
        </Link>
        <Link
          to="/projects"
          className={`${
            isHome ? " p-4 my-18 absolute bottom-0 right-12 " : " p-6 transition-[letter-spacing] duration-500 "
          } ${ isProjects ? " tracking-[0.5rem] uppercase font-semibold " : ""} h-fit w-fit text-2xl text-text-primary `} 
        >
          Projects
        </Link>
      </div>
    </>
  );
}

export default Navbar;
