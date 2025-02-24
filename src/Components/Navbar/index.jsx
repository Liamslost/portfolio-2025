import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={`${isHome ? "" : "float-right mr-30 pt-8"} `}>
      <Link
        to="/"
        className={`${
          isHome ? "hidden" : "p-6 "
        }  h-fit w-fit text-2xl text-text-primary font-semibold `}>
        Home
      </Link>
      <Link
        to="/about"
        className={`${
          isHome ? " p-4 m-2 my-26 absolute bottom-0 rotate-270 z-1" : "p-6 "
        } h-fit w-fit text-2xl text-text-primary z-0 font-semibold `}>
        About
      </Link>
      <Link
        to="/contact"
        className={`${
          isHome ? " p-6 my-12 absolute rotate-90 right-0 " : "p-6 "
        }  h-fit w-fit text-2xl text-text-primary font-semibold `}>
        Contact
      </Link>
      <Link
        to="/projects"
        className={`${
          isHome ? " p-4 my-18 absolute bottom-0 right-12 " : " p-6 "
        } h-fit w-fit text-2xl text-text-primary font-semibold `}>
        Projects
      </Link>
    </div>
  );
}

export default Navbar;
