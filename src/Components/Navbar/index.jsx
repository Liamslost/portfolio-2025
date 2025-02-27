import { Link, useLocation } from "react-router-dom";
import "../../index.css";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isContact = location.pathname === "/contact";
  const isProjects = location.pathname === "/projects";

  return (
    <>
      <div className={`${isHome ? "hidden" : "flex md:pt-10"}`}>
        <div
          className={`${
            isContact
              ? "size-20 bg-secondary rounded-full border-2 absolute z-0 m-0 md:ml-15"
              : "hidden"
          } `}
        ></div>
        <img
          src="/mini-avatar.png"
          alt="avatar"
          className={`${isContact ? "opacity-0" : ""} size-20 ml-15 z-1`}
        />
        <h1 className="text-text-primary text-lg md:text-5xl p-0 md:p-4 font-semibold">
          Hi. I&apos;m Liam
        </h1>
      </div>
      <div
        className={`${
          isHome ? "" : "float-right mr-30 absolute right-0 top-19 "
        } `}
      >
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
            isHome
              ? " p-4 m-2 my-26 absolute bottom-0 rotate-270 font-semibold "
              : " p-6 transition-[letter-spacing] duration-500"
          } ${
            isAbout
              ? " tracking-[0.5rem] uppercase font-semibold transition-[letter-spacing] duration-500"
              : ""
          } h-fit text-2xl text-text-primary `}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`${
            isHome
              ? " p-6 my-12 absolute rotate-90 right-0 font-semibold "
              : " p-6 transition-[letter-spacing] duration-500 "
          }  ${
            isContact ? " tracking-[0.5rem] uppercase font-semibold " : ""
          } h-fit w-fit text-2xl text-text-primary `}
        >
          Contact
        </Link>
        <Link
          to="/projects"
          className={`${
            isHome
              ? " p-4 my-18 absolute bottom-0 right-12 font-semibold "
              : " p-6 transition-[letter-spacing] duration-500 "
          } ${
            isProjects ? " tracking-[0.5rem] uppercase font-semibold " : ""
          } h-fit w-fit text-2xl text-text-primary `}
        >
          Projects
        </Link>
      </div>
    </>
  );
}

export default Navbar;
