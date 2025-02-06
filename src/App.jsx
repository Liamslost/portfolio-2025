import "./index.css";
import { Copyright } from "lucide-react";

function App() {
  return (
    <>
      <nav id="top-nav" className="w-full">
        <a
          className="h-fit w-fit text-2xl text-text-primary font-semibold p-6 my-12 absolute rotate-90 top-0 right-0"
          href="about"
        >
          CONTACT
        </a>
      </nav>
      <section className="h-[calc(100vh-3rem)] w-full bg-primary p-10">
        <h1 className="text-text-primary text-5xl p-4 absolute font-semibold">
          Hi. I&apos;m Liam
        </h1>
        <div className="size-110 bg-secondary relative top-1/5 rounded-full mx-auto border-8 shadow-[18px_4px_10px_rgba(0,0,0,0.3)]">
          <img
            src="/me-neutral.svg"
            alt="avatar"
            className="size-100 relative top-10 drop-shadow-[49px_4px_4px_rgba(0,0,0,0.3)]"
          />
        </div>
      </section>
      <nav id="bottom-nav" className=" w-full">
        <a
          className="h-fit w-fit text-2xl text-text-primary font-semibold p-4 m-2 my-26 absolute bottom-0 rotate-270 "
          href="about"
        >
          ABOUT
        </a>
        <a
          className=" h-fit w-fit text-2xl text-text-primary font-semibold p-4 my-18 absolute bottom-0 right-12 "
          href="about"
        >
          PROJECTS
        </a>
      </nav>
      <footer className="text-white bg-tertiary h-12 pl-10 flex items-center">
        <Copyright className="text-black mr-3" />
        Copyright2025
      </footer>
    </>
  );
}

export default App;
