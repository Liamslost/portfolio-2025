import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Copyright } from "lucide-react";
import { gsap } from "gsap";
import { useEffect, useState, useRef } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";


function App() {
  const [domContentLoaded, setDomContentLoaded] = useState(false);
  const [isExcited, setIsExcited] = useState(false);

  const xPosRef = useRef(0);
  const yPosRef = useRef(0);
  const storedXRef = useRef(0);
  const storedYRef = useRef(0);
  const resetTimeoutRef = useRef(null);

  const meTl = gsap.timeline({delay: 1});
  const blink = useRef(
    gsap.timeline({
      repeat: -1,
      repeatDelay: 5,
      paused: true,
    })
  ).current;

  useEffect(() => {
    gsap.set("#me", { yPercent: 90 });
    gsap.set("#face", { yPercent: 5 });
    gsap.set("#left-ear", { yPercent: 15, xPercent: 10, rotate: 4 });
    gsap.set("#right-ear", { yPercent: 15, xPercent: -10, rotate: -4 });
    gsap.set("#left-brow", { yPercent: 20 });
    gsap.set("#right-brow", { yPercent: 20 });

  meTl
      .to(
        "#me",
        {
          duration: 1,
          yPercent: 5,
          ease: "elastic.out(0.4, 0.3)",
        },
        0.5
      )
      .to(
        "#face",
        {
          duration: 0.9,
          yPercent: 0,
          ease: "elastic.out(0.58, 0.25)",
        },
        0.6
      )
      .to(
        "#right-ear",
        {
          duration: 1,
          rotate: 0,
          yPercent: 0,
          xPercent: 0,
          ease: "elastic.out(0.2, 0.1)",
        },
        0.7
      )
      .to(
        "#left-ear",
        {
          duration: 1,
          rotate: 0,
          yPercent: 0,
          xPercent: 0,
          ease: "elastic.out(0.5, 0.4)",
        },
        0.7
      )
      .to(
        "#left-brow",
        {
          duration: 1,
          yPercent: 0,
          ease: "bounce.out(0.3, 0.2)",
        },
        0.7
      )
      .to(
        "#right-brow",
        {
          duration: 1,
          yPercent: 0,
          ease: "bounce.out(0.3, 0.2)",
        },
        0.7
      );

      gsap.ticker.add(animateFace)
  },[]);

  // CHECK IF DOM IS LOADED
  useEffect(() => {
    const handleDomContentLoaded = () => {
      setDomContentLoaded(true);
    };

    if (document.readyState === "complete" || document.readyState === "interactive") {
      handleDomContentLoaded();
    } else {
      window.addEventListener("DOMContentLoaded", handleDomContentLoaded);
    }

    return () => {
      window.removeEventListener("DOMContentLoaded", handleDomContentLoaded);
    };
  }, [meTl]);

  useEffect(() => {
    if (domContentLoaded) {
    blink
    .to("#right-eye, #left-eye", { duration: 0.01, opacity: 0 }, 0)
    .to("#right-eye-2, #left-eye-2", { duration: 0.01, opacity: 1 }, 0)
    .to("#right-eye, #left-eye", { duration: 0.01, opacity: 1 }, 0.15)
    .to("#right-eye-2, #left-eye-2", { duration: 0.01, opacity: 0 }, 0.15);
    blink.play();  
    }
  }, [domContentLoaded, blink]);
      
  useEffect(() => {
    if (isExcited) {
      gsap.to("#mouth", { opacity: 0, duration: 0.5 });
      gsap.to("#eyes", { opacity: 0, duration: 0.5 });
      gsap.to("#mouth-happy", { opacity: 1, duration: 0.5 });
      gsap.to("#cheeks", { yPercent: -75, duration: 0.5 });
    } else {
      gsap.to("#mouth", { opacity: 1, duration: 0.2 });
      gsap.to("#eyes", { opacity: 1, duration: 0.2 });
      gsap.to("#mouth-happy", { opacity: 0, duration: 0.2 });
      gsap.to("#cheeks", { yPercent: 0, duration: 0.2 });
    }
  }, [isExcited]);

  useEffect(() => {
    const anchors = document.querySelectorAll("a");
    const handleMouseEnter = () => setIsExcited(true);
    const handleMouseLeave = () => setIsExcited(false);

    anchors.forEach((anchor) => {
      anchor.addEventListener("mouseenter", handleMouseEnter);
      anchor.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("mouseenter", handleMouseEnter);
        anchor.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  // Mouse tracking event
  useEffect(() => {
    window.addEventListener("mousemove", updateScreenCoords);

    return () => {
      window.removeEventListener("mousemove", updateScreenCoords);
    };
  }, []);

  function updateScreenCoords(event) {
    xPosRef.current = event.clientX;
    yPosRef.current = event.clientY;
  
  // Clear the existing timeout if the mouse moves
  if (resetTimeoutRef.current) {
    clearTimeout(resetTimeoutRef.current);
  }

  // Set a new timeout to reset the SVG elements after X seconds of inactivity
  resetTimeoutRef.current = setTimeout(() => {
    gsap.to("#face", { xPercent: 0, yPercent: 0 });
    gsap.to("#face-inner", { xPercent: 0, yPercent: 0 });
    gsap.to("#hair", { xPercent: 0, yPercent: 0, skewY: 0 });
    gsap.to(".pupil", { xPercent: 0, yPercent: 0 });
    gsap.to("#left-ear", { xPercent: 0, yPercent: 0 });
    gsap.to("#right-ear", { xPercent: 0, yPercent: 0 });
    gsap.to("#right-brow, #left-brow", { yPercent: 0 });
  }, 5000);
}

  function animateFace() {
    if (storedXRef.current === xPosRef.current && storedYRef.current === yPosRef.current) return;
  
    const width = window.innerWidth;
    const height = window.innerHeight;

    const x = (xPosRef.current / width) * 100 - 50;
    const y = (yPosRef.current / height) * 100 - 50;

    const eyebrowY = Math.max(-10, Math.min(y * 2.5 , 2));

    gsap.to("#face", { xPercent: x / 50, yPercent: y / 100});
    gsap.to("#face-inner", { xPercent: x / 7, yPercent: y / 15 });
    gsap.to("#hair", { xPercent: x / 50, yPercent: y / 60 , skewY: y / 100 });  
    gsap.to(".pupil", { xPercent: x / 2, yPercent: y / 3 });
    gsap.to("#left-ear", { xPercent: (x / 20) * -1, yPercent: -y / 10 });
    gsap.to("#right-ear", { xPercent: (x / 20) * -1, yPercent: -y / 10 });
    gsap.to("#right-brow, #left-brow", { yPercent: eyebrowY });

    storedXRef.current = xPosRef.current;
    storedYRef.current = yPosRef.current;
  }

  return (
    <>
          <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>

      <nav id="top-nav" className="w-full">
        <a
          className="h-fit w-fit text-2xl text-text-primary font-semibold p-6 my-12 absolute rotate-90 right-0 "
          href="contact"
        >CONTACT
        </a>
      </nav>
      <section className="h-[calc(100vh-3rem)] w-full bg-primary p-10 overflow-hidden">
        <h1 className="text-text-primary text-5xl p-4 absolute font-semibold">
          Hi. I&apos;m Liam
        </h1>
        <div className="flex justify-center items-center h-full w-full z-0">
          <div
            id=""
            className="sm:size-60 md:size-90 lg:size-80 xl:size-125 2xl:size-150  bg-black absolute rounded-full mx-auto z-0 border-tertiary drop-shadow-[18px_4px_10px_rgba(0,0,0,0.3)]"
          ></div>
          <div
            id="background"
            className="sm:size-60 md:size-90 lg:size-80 xl:size-120 2xl:size-150  bg-secondary rounded-full mx-auto border-10 z-10 border-tertiary drop-shadow-[18px_4px_10px_rgba(0,0,0,0.3)] clipPath"
          >
            <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 137.19 168.32">
  <defs>
    <style>{`
    
      .cls-1 {
        fill: url(#radial-gradient-2);
      }

      .cls-2 {
        fill: #d09490;
      }

      .cls-3 {
        fill: #231f20;
      }

      .cls-4 {
        fill: #e4e0d7;
      }

      .cls-5 {
        fill: #fefdf4;
      }

      .cls-6 {
        fill: url(#radial-gradient);
      }

      .cls-7 {
        opacity: .8;
      }

      .cls-7, .cls-8, .cls-9 {
        fill: #fff;
      }

      .cls-8 {
        opacity: .7;
      }

      .cls-10 {
        fill: #0c0d17;
      }

      .cls-11 {
        fill: #fff8e0;
      }

      .cls-12 {
        fill: #f598ab;
      }

      .cls-13 {
        fill: #382e00;
      }

      .cls-14 {
        stroke: #655a37;
        stroke-miterlimit: 10;
        stroke-width: 1.5px;
      }

      .cls-14, .cls-15 {
        fill: #3b2d00;
      }

      .cls-16 {
        opacity: .35;
      }

      .cls-17 {
        fill: #e8aa87;
      }

      .cls-18 {
        fill: #fedcba;
      }

      .cls-19 {
        fill: #c9c0ae;
      }

      .cls-20 {
        opacity: 0;
      }

      .cls-21 {
        fill: #2c2100;
      }

      .cls-22 {
        fill: #2c2100;
      }
        `}
    </style>
    <radialGradient id="radial-gradient" cx="54.31" cy="67.77" fx="54.31" fy="67.77" r="5.05" gradientTransform="translate(31.62)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#ffb1bb"/>
      <stop offset="1" stopColor="#ffb1bb" stopOpacity=".5"/>
    </radialGradient>
    <radialGradient id="radial-gradient-2" cx="-261.71" cy="67.77" fx="-261.71" fy="67.77" gradientTransform="translate(-212.53) rotate(-180) scale(1 -1)" xlinkHref="#radial-gradient"/>
  </defs>
  <g id="me" data-name="Layer 2">
    <g id="avatar-mixed">
      <g id="sweater">
        <path d="M76.14,94.21c.38-.96,4.52-.74,4.33-1.8-.14-.79,1.24-.96,1.57-1.78.53-1.34,2.13-2.26,2.7-1.89.36.23.25,1.2,0,3.14-.24,1.86-.51,2.79-.05,3.14.28.21.67.08,1.03,0,2.31-.52,5.59.75,6.43,2.54.23.49.26,1,.81,1.68.47.59.99.88,1.14.97,1.6.96,21.26,14.14,24.11,13.95.09,0,.59-.06,1.19.11,0,0,.75.2,1.41.76,3.02,2.54,5.62,13.19,5.62,13.19,2.55,10.45,3.09,8.37,3.35,12,.18,2.53.17,6.93,2.6,8.22.4.21.46.12,1.08.43.39.19,3.2,1.65,3.68,4.54.31,1.9-.54,3.48-.65,3.68-.87,1.57-2.13,1.92-2.16,3.14-.02.75.44,1.21.87,1.84,1.57,2.28,1.35,6.11,1.35,5.27l-26.92,1-70.63-1H.88c0,.57-.11-3.84,2.27-7.11.51-.7-.94-1.3-1.51-1.87-1.43-1.44-1.41-2.09-1.62-3.21-.15-.78,1.06-2.66,1.73-3.28.83-.77,2.54-.06,2.86-1.05.6-1.87.66-2.75.82-4.75.07-.94-.47-4.99,2-13.66,1.85-6.47,1.36-3.84,2.81-8.87.5-1.72,2.16-4.23,3.78-6.54.88-1.25,2.31-1.54,2.65-1.86,1.78-1.66,3.32-3.09,4.11-3.44,12.38-5.51,14.71-5.33,17.25-10.27.52-1.02,2.72-2.06,3.51-2.94,2.55-2.8,6.03-1.42,8.11-3.68,1.85-2.01,1.41-5.62,1.41-5.62,0,3.1,23.01,10.33,25.09,5.04Z"/>
        <path className="cls-9" d="M50.66,100.4c-.26.14.27,1.77.87,3.03.32.67,1.19,2.37,2.81,3.96,3.63,3.56,8.76,4.36,10.02,4.54,1.57.23,5.72.63,10.38-1.23,1.76-.7,4.69-1.91,6.92-4.83,1.93-2.53,2.82-5.65,2.38-5.91-.3-.17-1.06,1-3.03,2.88-1.26,1.21-3.12,2.99-5.41,4.25-3.41,1.87-6.69,1.99-8,2.02-.72.02-4.08.06-8-1.59-1.44-.6-4.34-1.82-6.78-4.61-1.13-1.3-1.91-2.65-2.16-2.52Z"/>
        <path className="cls-11" d="M85.9,96.24s.54,2.84-.56,6.34c-.05.17-1.04,3.2-3.1,5.62-4.46,5.24-11.99,5.36-14.85,5.41-2.06.03-5.49.05-9.37-1.73-1.63-.75-4.59-2.15-6.85-5.41-.38-.55-3.5-5.14-2.6-7.86.08-.24.38-1.02.07-1.3-.23-.21-.67,0-1.59.36-2.52,1.01-3,1.01-3.24,1.59-.27.63.15.96-.14,1.59-.43.89-1.86.86-2.09,1.15-1.77,2.28-5.67,5.71-9.88,7.78-4.65,2.29-9.63,3.18-11.46,4.54-.26.2-1.16,1.13-2.67,1.73-.6.24-1.44,1.16-1.53,1.18-1.34.33-4.65,4.25-7.87,18.69-1.11,4.99-1.46,7.87-1.96,13.2-.01.15-1.1,2.79-1.48,2.97-.46.23-.7.31-1.43.3-1.01-.01-1.81,1.25-1.8,2.31,0,.74.08.8,1.15,2.23.72.96,2.13,1.05,2.16,2.49.02.77-.81,1.56-1.3,2.77-.78,1.91-1.04,4.12-1.04,4.12l130.65.42s-.09-6.29-1.3-6.49c-.3-.05-.69.22-.94,0-.28-.26-.13-.96.14-1.44.26-.46.62-.68.87-.87.81-.6,1.74-1.68,1.95-2.81.13-.7.04-1.8-.65-2.45-.83-.78-1.7-.14-2.6-.79-.9-.65-.76-1.82-1.15-4.18-.23-1.37-.69-2.69-1.01-4.04-.87-3.64-2.27-7.6-4.11-12.83-3.09-8.78-3.68-9.05-4.04-10.74-.07-.32-.29-1.45-1.08-2.67,0,0-1.11-.26-1.79-.9-3.64-3.43-9.28-5.93-9.28-5.93-5.61-1.76-12.13-7.9-14.82-9.41-2.88-1.61-7.42-4.96-7.42-4.96Z"/>
        <path className="cls-19" d="M15.89,167.24s-2.43-.46-6.01-2.26c-.69-.35-1.83-.94-1.87-1.8-.02-.37.16-.84.5-1.01.44-.22,1.03.11,1.23.22.5.27,3.51.98,9.52,2.38.57.13,1.71.38,2.52-.22.08-.06.6-.44.58-.94-.02-.56-.71-.95-1.08-1.15-3.14-1.67-7.87-2.05-9.01-4.4-.35-.73-.4-1.73,0-2.02.4-.29,1.09.23,2.16.72.74.34,3.87,1.78,5.69.72,1.11-.64,1.42-2.02,1.51-2.45.29-1.31-.15-2.01-2.02-6.63-3.22-7.96-.92-3.47-1.87-5.69-.16-.38-.61-1.39-.29-1.66.23-.19.76.08,1.01.22,3.03,1.63,5.73,4.23,7.06,3.75,1.28-.46.91-3.59,1.66-3.68.7-.08,1.52,2.56,1.73,3.24,0,0,.33,1.05,4.88,11.26,3.96,8.89,14.86,11.48,14.86,11.48l-32.76-.08Z"/>
        <path d="M27.02,153.46c-.04-.21-.1-.09-2.92-2.81-1.02-.99-1.81-1.77-2.38-3.03-.09-.19-.83-1.88-.43-2.16.7-.49,3.91,3.9,4.87,3.35.56-.32-.07-2.09-1.62-7.79-2.43-8.93-1.96-8.56-2.6-9.52-.23-.35-1.49-2.19-1.41-4.43.01-.34.04-.99.32-1.08.63-.2,2.04,2.57,2.49,3.46,2.83,5.59,4.05,12.71,4.65,16.65,1.74,11.46.24,9.34,1.62,14.92.75,3.03.49,6.29.49,6.29h-3.05s.3-12.02-.03-13.86Z"/>
        <path className="cls-19" d="M117.56,140.03c.6.46-1.15,3.61-3.24,10.38-.79,2.54-1.19,4.17-.32,5.19,1.1,1.3,3.75,1.02,4.22.97,2.29-.24,3.36-1.42,4.22-.81.54.38.75,1.3.49,1.95-.4.98-1.7.77-4.38,1.78-2.28.86-3.41,1.79-4.05,2.43-.53.53-1.57,1.56-1.3,2.11.46.92,4.38-.11,5.19-.32,2.42-.64,3.87-1.44,6.65-1.62,1.26-.08,1.82.03,1.95.32.21.52-1,1.47-1.62,1.95-4.27,3.27-6.16,2.96-6.16,2.96l-38.68-.17s2.23-.14,7.2-.84c3.94-.55,9.58-4.98,13.46-10.54,4.3-6.17,4.65-13.47,5.68-13.3.59.1.14,2.44,1.3,3.08,2.38,1.31,8.43-6.27,9.41-5.51Z"/>
        <path d="M108.77,153.18c.04-.21.1-.09,2.92-2.81,1.02-.99,1.81-1.77,2.38-3.03.09-.19.83-1.88.43-2.16-.7-.49-3.91,3.9-4.87,3.35-.56-.32.07-2.09,1.62-7.79,2.43-8.93,1.96-8.56,2.6-9.52.23-.35,1.49-2.19,1.41-4.43-.01-.34-.04-.99-.32-1.08-.63-.2-2.04,2.57-2.49,3.46-2.83,5.59-4.05,12.71-4.65,16.65-1.74,11.46-.24,9.34-1.62,14.92-.75,3.03-.5,6.57-.5,6.57h3.07s-.3-12.3.02-14.14Z"/>
        <path className="cls-19" d="M41.9,102.35s1.49,5.01,4.06,7.96c1.72,1.98,3.74,4.3,7.24,6.38,5.34,3.17,10.36,3.53,12.65,3.68,6.26.39,10.88-1.28,11.79-1.62,2.19-.82,6.15-2.35,9.62-6.27,1.1-1.24,2.14-3.24,4.22-7.24,1.25-2.42,1.83-3.62,1.83-3.62l-1.53-.92-.51-1.56-.38-.81c-.23-.49-.6-.9-1.07-1.17-.4-.23-.86-.5-1.13-.62-.23-.1-.47-.17-.72-.19l-.8-.07c-.26-.02-.53.03-.77.14l-.51.24.23.63s.35.56-.01,2.67c-.48,2.84-.8,3.67-1.69,5.11-.89,1.42-2.75,3.86-4.94,5.51-4.32,3.25-10.95,3.82-15.32,3.28-7.02-.86-10.99-4.83-11.82-5.8-1.75-2.04-2.92-3.88-3.32-6.06-.31-1.69-.05-3.91-.39-4.26-.35-.37-2.89.37-4.66,1.52-.6.39-.61,1.15-1.06,1.69-.47.57-1.02,1.41-1.02,1.41Z"/>
        <path className="cls-11" d="M66.92,114.58l-.23,3.48c-.02.32-.3.56-.62.54l-2.67-.23c-.32-.03-.56-.31-.53-.63l.32-3.41c.03-.31.3-.54.61-.52l2.57.15c.32.02.56.29.54.61Z"/>
        <path className="cls-11" d="M68.55,117.94l-.22-3.3c-.02-.36.24-.67.6-.69l1.91-.13c.32-.02.61.2.68.51l.63,3.05c.07.36-.17.71-.53.77l-2.32.37c-.38.06-.72-.22-.75-.6Z"/>
        <path className="cls-11" d="M59.06,117.42l.31.12c.76.28,1.6-.17,1.78-.97l.54-2.49c.08-.36-.14-.71-.5-.8l-.97-.23c-.36-.09-.72.13-.81.49l-.77,3.09c-.08.33.1.67.42.79Z"/>
        <path className="cls-11" d="M56.55,116.21c-1.15.48-4.06-1.22-4.38-2.43-.27-1.02,2.01-3.25,2.01-3.25l4.14,2.31s-.8,2.97-1.76,3.38Z"/>
        <path className="cls-11" d="M50.59,112.4c1.09-.05,3.14-3,3.14-3l-1.39-1.35s-3.39,1.86-3.47,3c-.04.55,1.18,1.38,1.72,1.35Z"/>
        <path className="cls-11" d="M46.49,108.29c-.15.58.87,1.82,1.46,1.9,1.18.16,3.81-2.85,3.81-2.85,0,0-1.62-1.42-1.99-2.03-.53-.87-.98-2.93-1.21-3.89-.2-.8-.3-3.28-.3-3.28,0,0-3.19.47-3.96,1.51-.24.32-.62,1.6-.62,1.6,0,0,1.77-1.48,2.44-1.31.17.04.33.5.27.67-.22.66-2.38,1.46-2.38,1.46l.59,1.89s2.27-2.09,3.11-1.78c.2.07.38.62.29.81-.38.81-3.03,1.95-3.03,1.95,0,0,.42,2.15,1.03,2.32.94.27,3.24-2.16,3.24-2.16,0,0,.42.71.32.94-.37.88-2.85,1.33-3.08,2.25Z"/>
        <path className="cls-11" d="M74.59,117.6l2.96-.86c.39-.11.59-.54.42-.91l-1.29-2.96c-.14-.32-.5-.48-.83-.36l-2.56.89c-.34.12-.52.48-.42.82l.89,2.94c.11.35.47.55.83.45Z"/>
        <path className="cls-11" d="M80.12,115.51l2.14-1.29c.38-.23.45-.75.15-1.08l-2.24-2.4c-.23-.24-.59-.29-.87-.12l-1.82,1.11c-.35.21-.44.68-.2,1.01l1.92,2.58c.21.29.61.37.92.18Z"/>
        <path className="cls-11" d="M84.47,112.2l1.33-1.16c.23-.2.21-.56-.04-.73l-2.68-1.87c-.22-.15-.27-.46-.1-.67l.19-.25c.15-.19.42-.23.62-.1l2.84,1.89c.21.14.49.09.63-.11l.56-.76c.16-.22.1-.52-.12-.67l-2.83-1.83c-.21-.13-.27-.4-.15-.62l.11-.21c.12-.22.39-.3.61-.19l3.07,1.52c.25.12.55,0,.64-.25l.25-.67c.08-.23-.02-.48-.24-.58l-3.03-1.43c-.23-.11-.33-.38-.23-.61l.02-.05c.1-.22.35-.34.58-.26l3.02,1.05c.27.09.57-.08.61-.37l.1-.62c.04-.22-.09-.43-.3-.51l-3.16-1.16c-.18-.07-.3-.24-.3-.44h0c0-.34.35-.56.66-.42l2.88,1.3c.27.12.59-.04.65-.34l.18-.94c.04-.19.17-.78,0-.88l-.11-.4c-.12-.31-.76-1.2-1.04-1.37l-1.59-.95c-.17-.11-.92-.23-1.12-.23h-1.1s.18,1.01.14,1.34l-.54,4.42c0,.06-.03.12-.06.17l-2.75,4.82s-.04.06-.06.09l-1.57,1.68c-.17.19-.17.48.02.65l2.77,2.69c.17.17.45.18.63.02Z"/>
        <path className="cls-19" d="M67.58,125.18c-.89-.06-.72-2.72-2.6-3.6-.58-.27-2.4-.86-1.8-.65,0,0-.21.59-.22.87-.02.63.94,1.12,1.44,1.44,2.12,1.37,1.77,3.65,2.88,3.75.97.08.96-1.68,3.24-3.17.35-.22,1.07-.65,1.51-1.51.2-.39.46-1.08.22-1.3-.22-.2-.78.09-1.01.22-2.21,1.18-2.75,4.03-3.68,3.96Z"/>
        <path className="cls-19" d="M74.04,122c-.12-.13.2-.45,1.5-2.31.39-.56.61-.89.88-.86.29.04.53.48.54.87.02.8-.93,1.4-1.51,1.76-.15.1-1.22.77-1.42.54Z"/>
        <path className="cls-19" d="M61.28,121.62c.11-.14-.24-.43-1.69-2.18-.44-.53-.69-.84-.95-.78-.28.06-.49.52-.46.91.04.8,1.04,1.32,1.65,1.63.16.08,1.28.66,1.46.42Z"/>
      </g>
      <path id="neck" className="cls-18" d="M52.54,92.05s.22,1.37-.31,3.64c-.15.64-.62,1.97-.41,2.52.17.47.62.53,1.23,1.08.67.62.92,1.27,1.08,1.59.7,1.37,3.48,3.39,6.13,4.54,4.88,2.12,9.39,1.32,10.67,1.08,4.08-.78,7.51-2.84,8.79-4.4.66-.8.81-1.54,2.02-2.81.34-.35.72-.72.79-1.3.08-.69.29-1.19.01-1.87-.72-1.75-.03-3.2-.51-3.6-.52-.43-2.37,1.12-3.65,2.01,0,0-4.42,3.06-10.19,3.18-3.46.07-8.01-1.03-11.75-3.6-1.46-1.01-3.88-2.06-3.88-2.06Z"/>
      <g id="hair">
        <path className="cls-15" d="M37.01,58.53s-2.98-10.24-3.55-13.41c-.35-1.91-.96-5.85-.81-10.81.08-2.76.14-4.16.76-5.3,1.58-2.91,4.54-5.14,4.54-5.14,0,0-.67-.68-1.62-1.24-3.07-1.8-4.7-5.41-4.7-5.41l5.14.76s-.65-5.96.34-6.52c1.22-.69,3.39,7.22,3.39,7.22,0,0,.71-1.58,1.68-3.3,1.9-3.37,5.76-4.59,11.03-6.16,1.69-.51,4.16-1.04,9.08-2.11,4.49-.97,7.51-2.32,9.08-4.05.48-.53,1.42-2.06,1.96-2.06.61,0,.42,2.18.44,2.38.2,1.73-.29,4.55-.29,4.55,0,0,3.21.68,10.17-4.01,1.54-1.04,2.11-1.65,3.45-2.8,1.18-1.02,1.3-1.32,1.62-.97,1.28,1.36.32,7.46.32,7.46,0,0,.46.08,3.89-2.92,1.29-1.13,1.54-1.39,1.78-1.3,1.27.48,0,9.73,0,9.73,0,0,2.33-1.16,5.68-4.05,1.24-1.07,1.54-1.39,1.95-1.3,1.5.35,1.16,8.68-.71,13.19-1.68,4.05-1.24,2.6-1.56,3.51-.74,2.13,1.92,2.72,2.92,5.68.69,2.03.52,3.75.16,6.33-.69,4.96-3.88,21.95-3.88,21.95l-62.26.11Z"/>
        <path id="hair-2" data-name="hair" className="cls-22" d="M71.81,5.49c-.59-.44-1.95,1.4-4.97,3.14-2.86,1.64-3.95,1.32-12.11,3.51-5.26,1.42-6.34,1.96-7.35,2.65-2.56,1.73-4.56,4.26-4.87,6.11-.08.5-.33,2.63-.38,3.41,0,.02-.05.81-.05.81-.36,0-.9.04-1.51.22-4.14,1.18-5.41,6.74-5.46,6.97-.12.56-.21,1.22-.16,3.62.1,4.83.03,7.25.59,8.22,1.82,3.11,9.72.18,20.76-1.14,16.06-1.92,36.02-.1,39.25,1.51.27.13,2.24,3.42,3.5,2.81.13-.06.67-2.64.72-3.29.03-.38.18-1.01.16-1.19-.23-1.94.75-3.75.38-7.46-.22-2.21-.79-3.82-.97-4.33-.56-1.56-1.16-2.55-1.24-2.7-1.23-2.22,1.54-15.06.31-13.98-.06.05.03.13-.64.74-4.03,3.63-5.35,3.28-6.27,3.68-2.08.88-4.43,1.31-4.6.92-.07-.17.3-.44.7-.81,2.23-2.06,2.66-4.88,3.14-8.06.05-.31.11-.79-.05-.87-.29-.13-1.07,1.11-1.35,1.51-2.22,3.18-8.28,4.6-8.87,3.62-.2-.33.33-.76,1.89-2.97,1.41-2,3.75-5.32,3.24-5.84-.34-.36-1.74.87-4.54,2.32-1.77.92-4.48,1.82-9.84,3.57-2.41.79-4.98,1.6-5.08,1.35-.09-.22,1.94-.8,3.62-2.65,1.83-2.01,2.71-4.91,2.05-5.41Z"/>
      </g>
      <g id="left-ear">
        <path id="shadow" className="cls-3" d="M36.01,51.14c-.07-.04-.14-.06-.22-.07-.43-.07-1.98-.26-3.5.24-3.68,1.21-4.97,5.84-5.14,6.49-1.32,5,1.55,9.16,2,9.79.91,1.27,2.11,2.96,4.27,3.95,1.46.67,3.25.96,4.38,2.65.11.17.21.35.21.35.04.07.07.13.1.19.16.33.54.48.89.38,0,0,.01,0,.02,0,.32-.1.54-.39.54-.73v-17.74c0-2.24-1.25-4.3-3.25-5.32l-.3-.15Z"/>
        <path className="cls-18" d="M38.13,60.59c.15-.16.53-1.42-.04-5.33-.28-.38-.76-.91-1.51-1.24-2.11-.93-4.34.62-4.6.81-2.46,1.78-2.48,5.12-2.49,6-.02,3.67,2.23,6.14,2.87,6.81,0,0,1.25,2.14,5.41,3.81.18.07.77.02.93-.13.17-.17-.12-1.08-.18-1.24-.65-1.78-.39-5.73-.38-5.89.01-.17.05-.6-.22-.87-.19-.19-.4-.16-.65-.27-.5-.22-.68-.8-.81-1.14-.5-1.29-1.63-3.21-2.87-3.2-.29,0-.5-.07-.72-.29-.17-.17-.14-.32-.03-.54.14-.28.55-.26.75-.29,1.05-.17,1.56.56,1.98.83,1.75,1.13,2.44,2.29,2.55,2.17Z"/>
        <path className="cls-17" d="M32.63,63.6c.26.75.68,1.92,1.73,3.06.4.44,1.44,1.54,3.1,1.95.49.12.54.36.78.25,0,0-.1-.61-.05-3.15.03-1.67,0-2.05,0-2.05,0,0-.43-1.02-2.39-3.13,0,0-1.09-2.05-2.26-1.83-.12.02-.53-.59-.77-.52-.36.1-.32.34-.4.49-.9,1.96.25,4.92.25,4.92Z"/>
      </g>
      <g id="right-ear">
        <path id="shadow-2" data-name="shadow" className="cls-3" d="M98.1,51.14c.07-.04.14-.06.22-.07.43-.07,1.98-.26,3.5.24,3.68,1.21,4.97,5.84,5.14,6.49,1.32,5-1.55,9.16-2,9.79-.91,1.27-2.11,2.96-4.27,3.95-1.46.67-3.25.96-4.38,2.65-.11.17-.21.35-.21.35-.04.07-.07.13-.1.19-.16.33-.54.48-.89.38,0,0-.01,0-.02,0-.32-.1-.54-.39-.54-.73v-17.74c0-2.24,1.25-4.3,3.25-5.32l.3-.15Z"/>
        <path className="cls-18" d="M96.72,60.59c-.15-.16-.53-1.42.04-5.33.28-.38.76-.91,1.51-1.24,2.11-.93,4.34.62,4.6.81,2.46,1.78,2.48,5.12,2.49,6,.02,3.67-2.23,6.14-2.87,6.81,0,0-1.25,2.14-5.41,3.81-.18.07-.77.02-.93-.13-.17-.17.12-1.08.18-1.24.65-1.78.39-5.73.38-5.89-.01-.17-.05-.6.22-.87.19-.19.4-.16.65-.27.5-.22.68-.8.81-1.14.5-1.29,1.63-3.21,2.87-3.2.29,0,.5-.07.72-.29.17-.17.14-.32.03-.54-.14-.28-.55-.26-.75-.29-1.05-.17-1.56.56-1.98.83-1.75,1.13-2.44,2.29-2.55,2.17Z"/>
        <path className="cls-17" d="M102.22,63.6c-.26.75-.68,1.92-1.73,3.06-.4.44-1.44,1.54-3.1,1.95-.49.12-.54.36-.78.25,0,0,.1-.61.05-3.15-.03-1.67,0-2.05,0-2.05,0,0,.43-1.02,2.39-3.13,0,0,1.09-2.05,2.26-1.83.12.02.53-.59.77-.52.36.1.32.34.4.49.9,1.96-.25,4.92-.25,4.92Z"/>
      </g>
      <g id="face">
        <path id="neck-shadow" className="cls-17" d="M53.08,92.7c.14.43.39,1.07.92,1.68.51.59.93.76,1.62,1.35.84.71,1.25,1.34,1.57,1.73,1.41,1.75,3.99,2.74,4.87,3.08,3.74,1.44,7.08.87,8.6.59,0,0,3.64-.67,6.81-2.87,1.89-1.31,2.7-2.54,2.97-2.97.28-.45.79-2.43.92-2.72"/>
        <path id="shadow-3" data-name="shadow" className="cls-3" d="M48.62,25.83c.06.13.18.21.3.15.11-.06.2-.11.25-.14.85-.56,1.54-.39,2.73-.84.29-.11.5-.2.92-.38,2.45-1.05,8.04-4.01,9.89-6,.12-.13.57-.62.7-.54.12.08-.09.62-.16.81-.68,1.75-2.7,4.64-5.37,6.26-.19.11-1.08,1.21-1.01,1.48.05.19.54.44.76.47,4.15.48,9.13.12,9.13.12,2.54-.38,1.97-.19,3.3-.43,5.29-.95,9.76-3.03,11.08-4.11,0,0,1.26-1.03,2.6-1.78.01,0,.03-.02.09-.05.63-.35.7-.41.73-.38.06.05-.13.41-.59,1.03-.64.84-5.29,6.98-8.65,7.52-1.01.16-1.49.46-2.45,1.05-.17.1-.43.27-.4.4.05.19.79.16,1.05.14,2.71-.14,6.63-1.37,6.63-1.37s4.21-1.32,6.16-2.05c.78-.29,1.17-.44,1.2-.46,0,0,.02-.01.02,0,.03.03-.52.74-.58.83-.87,1.49-8.48,4.37-8.54,4.36-.15-.02,2.13.28,5.01-.5,6.16-1.68,9.79-5.89,10.38-6.6,3.74-4.47,4.56-9.37,4.51-9.8,0-.04-.05-.34.09-.62.08-.16.19-.25.3-.34.5-.44,1.1-1.23,1.26-1.53.01-.03.05-.11.14-.15,0,0,.13-.07.32.01.38.16.38,1.23.38,1.23,0,4.28-.26,5.19-.26,5.19-.77,2.85-3.21,10.64-4.7,12.49-.1.12-.45.53-.39,1.02.07.61.75.99.9,1.08,1.6.98,2.29,5.23,2.41,5.98,1.05,6.43-1.12,12.9-1.03,13.68l-1,20.02c-.08,1.59-.53,3.14-1.31,4.52-1.14,2.01-2.81,4.89-3.67,6.09-3.99,5.48-8.08,7.82-13.38,10.86-2.01,1.15-4.71,1.63-6.82,2.3-1.05.34-7.43.21-8.92-.16-3.87-.97-7.08-2.54-10.08-4.63-.8-.55-1.58-1.14-2.35-1.77-1.72-1.38-3.4-2.93-5.14-4.64-1.18-1.15-5.9-7.57-6.62-10.77-.63-2.82-.9-21.55-.4-22.07.19-.2-2.42-4.3-2.35-6.43.02-.71.19-1.92.43-2.97.08-.36.18-.74.22-1.3.07-.98-.11-1.72-.16-1.95-.29-1.36.16-3.44.76-4.65,1.44-2.92,3.27-5.29,6.27-6,.53-.13.4-.69.38-1.03-.07-1.15.3-1.93.32-2.38.11-1.88,1.46-3.36,2.54-4.54.86-.94,2.16-2.06,2.43-1.84.23.19-.51,1.24-1.3,3.57-.47,1.39-3.14,4.33-.43,3.07,1.08-.5,1.44-.59,1.47-.52Z"/>
        <path id="face-2" data-name="face" className="cls-18" d="M89.16,40.4c.38-.53,1.76-2.56,1.19-4.87-.29-1.45-1.77-3.69-3.35-2.27-8.35,3.19-26.19,2.82-32.55-.43-3.89-2.24-8.59-3.54-9.73,2.05-.26,1.98.48,2.98.71,4.34.06.32.01.94-.08,1.32-.41,1.66-1.43,1.47-2.79,3.2-1.36,1.72-1.29,3.57-1.3,7.46-.14,4.1-.28,20.9-.11,22.28,1.73,8.81,9.69,14.05,12.65,16,11.78,8.16,24.46,5.64,35.58-6.7,8.5-10.4,3.21-16.45,4.76-34.93l-2.22-4.35-2.76-3.11Z"/>
      </g>
      <g id="face-inner">
        <path id="right-brow" className="cls-21" d="M89.8,53.1c.32-.32-.98-2.81-2.2-4.07-3.96-4.1-9.76-3.77-12.22-2.85-.44.17-1.11.48-1.51,1.15-.67,1.13-.37,2.88.54,3.5.9.61,2.15-.06,3.24-.4,5.53-1.7,12.15,2.67,12.15,2.67Z"/>
        <path id="left-brow" className="cls-21" d="M46.2,53.1c-.32-.32.98-2.81,2.2-4.07,3.96-4.1,9.76-3.77,12.22-2.85.44.17,1.11.48,1.51,1.15.67,1.13.37,2.88-.54,3.5-.9.61-2.15-.06-3.24-.4-5.53-1.7-12.15,2.67-12.15,2.67Z"/>
        <g id="cheeks">
          <path className="cls-17" d="M88.44,67.77c0,.93-1.49,1.68-2.74,1.68s-2.27-.61-2.27-1.53,1.49-1.82,2.74-1.82,2.27.75,2.27,1.68Z"/>
          <path className="cls-17" d="M46.67,67.77c0,.93,1.49,1.68,2.74,1.68s2.27-.61,2.27-1.53-1.49-1.82-2.74-1.82-2.27.75-2.27,1.68Z"/>
        </g>
        <path id="right-eye2" d="M75.09,56.3c.03.2-.11,1.68.04,2.22.04.14,2.59-1.42,3.26-1.62.93-.29,2.9-.45,3.88-.42.85.03,3.27.13,3.27.13l1.1,1.51s-.35-1.54-.52-1.91c-.38-.83-1.46-1.12-2.4-1.14s-2.07-.07-3.02-.1c-1.22-.03-5.78.22-5.6,1.34Z"/>
        <path id="left-eye2" d="M60.89,56.43c-.03.2.11,1.68-.04,2.22-.04.14-2.59-1.42-3.26-1.62-.93-.29-2.9-.45-3.88-.42-.85.03-3.27.13-3.27.13l-1.1,1.51s.35-1.54.52-1.91c.38-.83,1.46-1.12,2.4-1.14s2.07-.07,3.02-.1c1.22-.03,5.78.22,5.6,1.34Z"/>
        <g id="nose">
          <path className="cls-17" d="M64.02,67.55c.15-.51,1.12-1.04,1.12-1.04,0,0,.42-.23.76-.16.22.04.25.17.49.32.31.2.62.21.97.22.31,0,1.11.03,1.68-.49.44-.4.42-.85.7-.87.27-.02.51.4.65.65.28.5.54,1.41.54,1.58.01.25-.03.58-.46,1.2-.67.95-2.05,1.2-2.75,1.25-.55.04-1.37-.16-2.15-.63-.74-.45-1.75-1.36-1.55-2.04Z"/>
          <path className="cls-13" d="M64.04,67.79c-.13.13.33.87.92,1.41.2.18.61.52,1.24.76.41.16,1.43.47,2.6.11.77-.24,1.24-.66,1.35-.76.51-.47.86-1.1.76-1.19-.09-.08-.45.34-1.14.65-.9.41-1.75.35-2.16.32-1.13-.08-2.03-.52-2.49-.76-.67-.34-.99-.63-1.08-.54Z"/>
        </g>
        <g id="eyes">
          <g id="right-eye">
            <path className="cls-9" d="M84.64,57.56c0,2.52-1.68,4.11-4.2,4.11s-4.92-1.59-4.92-4.11c0-1.03.35-1.54.96-2.28.7-.85,2.11-1.16,3.61-1.16s2.81.31,3.62,1.16c.69.72.94,1.2.94,2.28Z"/>
            <g id="pupil" className="pupil">
              <circle className="cls-14" cx="80.16" cy="57.81" r="2.73"/>
              <circle cx="80.16" cy="57.81" r="1.55"/>
              <circle className="cls-8" cx="81.55" cy="56.05" r=".52"/>
            </g>
            <path className="cls-10" d="M86.81,59.35c-.03-.22.04-1.98-.59-3.85-.46-1.37-4.09-2.53-6.31-2.55-1.97-.02-3.99.5-4.72,2.55-.77,2.17-.1,4.43,1.99,5.89,2.27,1.59,5.77.78,7.07-.74,1.5-1.75.98-3.14.92-3.69-.08-.74,1.5,2,1.64,2.39ZM80.42,61.45c-2.38,0-4.64-1.5-4.64-3.87,0-.97.33-1.45.9-2.15.66-.8,1.99-1.1,3.4-1.1s2.65.3,3.42,1.1c.65.68.88,1.13.88,2.15,0,2.38-1.58,3.87-3.96,3.87Z"/>
          </g>
          <g id="left-eye">
            <path className="cls-9" d="M51.35,57.56c0,2.52,1.68,4.11,4.2,4.11s4.92-1.59,4.92-4.11c0-1.03-.35-1.54-.96-2.28-.7-.85-2.11-1.16-3.61-1.16s-2.81.31-3.62,1.16c-.69.72-.94,1.2-.94,2.28Z"/>
            <g id="pupil-2" className="pupil" data-name="pupil">
              <circle className="cls-14" cx="55.83" cy="57.81" r="2.73"/>
              <circle cx="55.83" cy="57.81" r="1.55"/>
              <circle className="cls-8" cx="54.44" cy="56.05" r=".52"/>
            </g>
            <path className="cls-10" d="M49.18,59.35c.03-.22-.04-1.98.59-3.85.46-1.37,4.09-2.53,6.31-2.55,1.97-.02,3.99.5,4.72,2.55.77,2.17.1,4.43-1.99,5.89-2.27,1.59-5.77.78-7.07-.74-1.5-1.75-.98-3.14-.92-3.69.08-.74-1.5,2-1.64,2.39ZM55.57,61.45c2.38,0,4.64-1.5,4.64-3.87,0-.97-.33-1.45-.9-2.15-.66-.8-1.99-1.1-3.4-1.1s-2.65.3-3.42,1.1c-.65.68-.88,1.13-.88,2.15,0,2.38,1.58,3.87,3.96,3.87Z"/>
          </g>
        </g>
        <g id="mouth">
          <path className="cls-3" d="M67.93,77.24c6.51-.01,8.17-.19,12.98-1.33,1.65-.03,1.96.71,1.63,1.74-.44.6-1.61-.07-2.5.61-3.66,3.58-5.01,5.95-11.93,6.1-9.25-.38-8.46-4.58-14.65-7.27-.1-2.28,1.28-.55,3.86-.34,2.6.54,9.66.5,10.6.49Z"/>
          <path className="cls-5" d="M71.34,78.85c-3.37.19-8.28.05-11.93-.53-.35-.06-.67.33-.48.63,2.49,3.76,6.37,3.93,11.15,3.64s10.94-5.44,5.11-4.17"/>
          <path className="cls-4" d="M72.55,80.93c-2.87.3-5.77.3-8.64,0l-3.62-.38c2.45,2.2,5.8,2.29,9.78,2.05,2.03-.12,4.22-1.04,5.71-2.01l-3.24.34Z"/>
        </g>
        <g id="mouth-embarrassed" className="cls-20">
          <path className="cls-3" d="M77.85,81.11c0,2.88-4.54,5.22-10.13,5.22s-10.13-2.34-10.13-5.22c0-1.35,1-2.59,2.64-3.52,1.85-1.05,4.24-.46,7.2-.46,2.8,0,5.62-.66,7.45.28s2.97,2.25,2.97,3.69Z"/>
          <g>
            <path className="cls-2" d="M76.04,81.24c0,2.1-3.73,3.81-8.32,3.81s-8.32-1.7-8.32-3.81c0-.99.82-1.89,2.17-2.56,1.52-.76,3.48-.33,5.92-.33,2.3,0,4.62-.48,6.12.21s2.44,1.64,2.44,2.69Z"/>
            <g>
              <path className="cls-12" d="M61.35,83.67s2.65-1.4,3.9-1.61c3.52-.62,5.68-.12,6.45.09.67.18,2.43,1.5,2.43,1.5,0,0-1.23.8-3.57,1.15-3.17.48-3.73.27-5.89-.03-1.89-.26-3.32-1.09-3.32-1.09Z"/>
              <path className="cls-16" d="M76.03,81.23c.04,1.47-1.9,2.42-1.9,2.42,0,0-4.21-.82-6.44-.82-1.77,0-6.34.84-6.34.84,0,0-2.07-.97-1.95-2.54.07-.95.8-1.83,2.1-2.48,1.47-.74,3.37-.32,5.73-.32,2.23,0,4.69-.4,6.2.15.65.23,2.55,1.11,2.59,2.75Z"/>
              <path className="cls-9" d="M61.35,78.78s3.54.89,5.87.94c0,0,2.26.05,4.99-.77.32-.09,1.23-.48,1.23-.48,0,0-.81-.29-1.9-.31-.75-.02-1.64.08-2.51.12-1.74.07-3-.17-4.17-.11-.65.03-1.49.05-1.95.11-1.06.14-1.56.5-1.56.5Z"/>
            </g>
          </g>
        </g>
        <g id="cheeks-embarrassed" className="cls-20">
          <path className="cls-6" d="M91.88,67.77c0,2.19-3.52,3.97-6.49,3.97s-5.38-1.44-5.38-3.63,3.52-4.31,6.49-4.31,5.38,1.78,5.38,3.97Z"/>
          <path className="cls-1" d="M43.24,67.77c0,2.19,3.52,3.97,6.49,3.97s5.38-1.44,5.38-3.63-3.52-4.31-6.49-4.31-5.38,1.78-5.38,3.97Z"/>
        </g>
        <g id="eyes-embarrassed" className="cls-20">
          <g id="right-eye-2" data-name="right-eye">
            <path className="cls-9" d="M84.41,57.5c0,2.38-1.75,3.11-4.12,3.11s-4.48-.74-4.48-3.11c0-.97.33-1.45.9-2.15.66-.8,1.99-1.1,3.4-1.1s2.65.3,3.42,1.1c.65.68.88,1.13.88,2.15Z"/>
            <g id="pupil-3" className="pupil" data-name="pupil">
              <circle className="cls-14" cx="80.25" cy="57.82" r="2.65"/>
              <circle cx="80.25" cy="57.82" r="1.26"/>
              <circle className="cls-8" cx="81.52" cy="56.25" r=".63"/>
              <circle className="cls-7" cx="82.39" cy="55.85" r=".39"/>
            </g>
            <path className="cls-10" d="M86.84,59.35c-.03-.22.04-1.98-.59-3.85-.46-1.37-4.09-2.53-6.31-2.55-1.97-.02-3.99.5-4.72,2.55-.77,2.17-.44,4.53,1.92,5.5.77.32,1.63.34,2.42.35,1.56.03,2,0,3.58-.38.3-.07.82-.5,1.04-.76,1.5-1.75,1.08-2.71,1.02-3.26-.08-.74,1.5,2,1.64,2.39ZM80.37,60.46c-2.38,0-4.56-.51-4.56-2.89,0-.97.33-1.45.9-2.15.66-.8,1.99-1.1,3.4-1.1s2.65.3,3.42,1.1c.65.68.99,1.14.88,2.15-.26,2.39-1.67,2.89-4.04,2.89Z"/>
          </g>
          <g id="left-eye-2" data-name="left-eye">
            <path className="cls-9" d="M51.58,57.5c0,2.38,1.75,3.11,4.12,3.11s4.48-.74,4.48-3.11c0-.97-.33-1.45-.9-2.15-.66-.8-1.99-1.1-3.4-1.1s-2.65.3-3.42,1.1c-.65.68-.88,1.13-.88,2.15Z"/>
            <g className="pupil" data-name="pupil">
              <circle className="cls-14" cx="55.73" cy="57.82" r="2.65"/>
              <circle cx="55.73" cy="57.82" r="1.26"/>
              <circle className="cls-8" cx="57" cy="56.26" r=".63"/>
              <circle className="cls-7" cx="57.63" cy="55.93" r=".39"/>
            </g>
            <path className="cls-10" d="M49.15,59.35c.03-.22-.04-1.98.59-3.85.46-1.37,4.09-2.53,6.31-2.55,1.97-.02,3.99.5,4.72,2.55.77,2.17.44,4.53-1.92,5.5-.77.32-1.63.34-2.42.35-1.56.03-2,0-3.58-.38-.3-.07-.82-.5-1.04-.76-1.5-1.75-1.08-2.71-1.02-3.26.08-.74-1.5,2-1.64,2.39ZM55.62,60.46c2.38,0,4.56-.51,4.56-2.89,0-.97-.33-1.45-.9-2.15-.66-.8-1.99-1.1-3.4-1.1s-2.65.3-3.42,1.1c-.65.68-.99,1.14-.88,2.15.26,2.39,1.67,2.89,4.04,2.89Z"/>
          </g>
        </g>
        <g id="mouth-happy" className="cls-20">
          <path className="cls-3" d="M67.75,75.49c7.19-.01,9.02-.21,14.33-1.46,1.83-.03,2.16.79,1.8,1.92-.49.66-1.78-.08-2.76.67-4.04,3.95-6.06,10.3-13.69,10.46-10.21-.42-8.8-8.78-15.64-11.76-.11-2.52,1.42-.61,4.26-.38,2.87.59,10.66.55,11.7.54Z"/>
          <path className="cls-2" d="M59.95,76.98c-1.3.25-2.02.58-2.06,1.04-.06.72.15.9.27,1.16,1.35,2.86,3.23,4.2,3.23,4.2.84.6,3.22,2.09,6.46,1.84,2.44-.18,4-1.25,5.99-2.61,0,0,2.38-1.63,4-4.61.15-.29.42-.81.2-1.18-.3-.51-1.34-.41-1.9-.36-2.99.3-4.48.45-5.69.61-.96.13-3.33.44-6.2,0-.98-.15-2.46-.46-4.3-.1Z"/>
          <path className="cls-5" d="M58.5,76.77c-.68.53-.62,1.26-.62,1.26l19.78.27s.86-.86.21-1.88"/>
        </g>
      </g>
    </g>
  </g>
</svg>
          </div>
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
