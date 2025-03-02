function Projects() {
  // const ProjectsData = [
  //   {
  //     name: "Karen-Ipsum",
  //     languages: [
  //       "/logos/typescript-original.svg",
  //       "/logos/react-original.svg",
  //       "/logos/tailwindcss-plain.svg",
  //       "/logos/heroku-original-wordmark.svg",
  //       "/logos/figma-original.svg",
  //       "/logos/mongodb-plain-wordmark.svg",
  //       "/logos/typescript-original.svg",
  //       "/logos/react-original.svg",
  //       "/logos/tailwindcss-plain.svg",
  //       "/logos/heroku-original-wordmark.svg",
  //       "/logos/figma-original.svg",
  //       "/logos/mongodb-plain-wordmark.svg",
  //     ],
  //     image: "/projects/karenIpsum.png",
  //     blurb:
  //       "The Karen Project currently functions as a clean, interactive Lorem Ipsum generator, providing a modern approach to creating placeholder text. Looking ahead, I plan to expand it with customizable templates and interactive features, transforming it into a versatile tool for generating and refining digital content.",
  //   },
  //   {
  //     name: "Whack-O-Jacko",
  //     languages: [
  //       "/logos/javascript-original.svg",
  //       "/logos/css3-original.svg",
  //       "/logos/html5-original.svg",
  //       "/logos/illustrator-plain.svg",
  //       "/logos/docker-plain-wordmark.svg",
  //       "/logos/javascript-original.svg",
  //       "/logos/css3-original.svg",
  //       "/logos/html5-original.svg",
  //       "/logos/illustrator-plain.svg",
  //       "/logos/docker-plain-wordmark.svg",
  //       "/logos/javascript-original.svg",
  //       "/logos/css3-original.svg",
  //     ],
  //     image: "/projects/Whack-a-Jacko.png",
  //     blurb:
  //       "A Whack-a-mole style game with a halloween theme. This was a 4 day group project at IO Academy within our first 6 weeks. I was responsible for the start and finish modal design and functionality, I also created all teh artwork for the project.",
  //   },
  //   {
  //     name: "Keyboard Warrior",
  //     languages: [
  //       "/logos/typescript-original.svg",
  //       "/logos/react-original.svg",
  //       "/logos/tailwindcss-plain.svg",
  //       "/logos/figma-original.svg",
  //       "/logos/typescript-original.svg",
  //       "/logos/react-original.svg",
  //       "/logos/tailwindcss-plain.svg",
  //       "/logos/figma-original.svg",
  //       "/logos/typescript-original.svg",
  //       "/logos/react-original.svg",
  //       "/logos/tailwindcss-plain.svg",
  //       "/logos/figma-original.svg",
  //     ],
  //     image: "/projects/keyboard-warrior.png",
  //     blurb:
  //       "Think 'GuitarHero' with a functional twist. Aimed at keyboard training with a fun gamification interface. This project was a joint venture with a friend and is still underway. Accuracy is rewarded with bonus points and currently has a mode selector - easy, hard and pro.",
  //   },
  //   {
  //     name: "Splitter",
  //     languages: [
  //       "/logos/react-original.svg",
  //       "/logos/tailwindcss-plain.svg",
  //       "/logos/css3-original.svg",
  //       "/logos/react-original.svg",
  //       "/logos/tailwindcss-plain.svg",
  //       "/logos/css3-original.svg",
  //       "/logos/react-original.svg",
  //       "/logos/tailwindcss-plain.svg",
  //       "/logos/css3-original.svg",
  //       "/logos/react-original.svg",
  //       "/logos/tailwindcss-plain.svg",
  //       "/logos/css3-original.svg",
  //       "/logos/react-original.svg",
  //       "/logos/tailwindcss-plain.svg",
  //       "/logos/css3-original.svg",
  //     ],
  //     image: "/projects/split.png",
  //     blurb:
  //       "Spliiter was one of my first React projects that i gave myself 3 evenings to 'complete'. I was happy eith how it turned out and i keep it aaround to remind myself how far I have come over the past year. The functionlity is there but given more time I would redesign the UI as i now know how common a project it is.",
  //   },
  // ];

  return (
    <div className="min-h-[calc(100vh-11rem)] w-screen m-auto py-2 pb-20 pt-20">
      <div className="bg-tertiary w-10/12 h-[2500px] md:h-[calc(100vh-15rem)] m-auto grid grid-cols-1 md:grid-cols-16 md:grid-rows-12 p-3  gap-10 md:gap-3 text-text-primary rounded-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <div className="bg-primary p-4 block md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-7 rounded-2xl">
          <p className="text-xl lg:text-2xl tracking-wide font-extraligt">
            Full-stack applications, data visualisations, and interactive tools
            - built with performance, usability, and creativity in mind.
          </p>
        </div>
        {/* TILE */}
        <div className="bg-secondary group relative overflow-hidden max-h-80 p-7 block md:col-start-5 md:col-end-14 md:row-start-1 md:row-end-5 rounded-2xl hover:drop-shadow-[0px_10px_2rem_rgba(255,255,255,0.1)] hover:rotate-2 hover:-translate-y-5 transition-all duration-500">
        <h1 className="text-right text-md font-light tracking-widest">
          Mach Machines</h1>
        <h2 className="text-right text-3xl mb-3 tracking-wider">
          Design</h2>
          {/* LINKS */}
          <div className="space-x-3 absolute top-3/24 left-4/12 hidden md:group-hover:flex opacity-0 md:group-hover:-rotate-2 md:group-hover:opacity-100">
            <a className="bg-white/20 py-2 px-6 hover:border-2 border-2 border-white/0 rounded-sm md:hover:rounded-full hover:border-white transition-all duration-300 ease-in" 
            href=""><div>More...</div></a>
          </div>
          {/* icons */}
          <div className="bg-tertiary/90 h-fit w-fit z-10 gap-4 py-4 px-8 absolute -bottom-full  md:group-hover:-bottom-1 md:group-hover:-rotate-2 flex justify-center delay-100 rounded-t-2xl left-1/2 -translate-x-1/2 transition-all duration-300">
          <img className="size-5 " src="/portfolio-2025/logos/illustrator-plain.svg" alt="Illustrator Logo" />
          <img className="size-5 " src="/portfolio-2025/logos/figma-original.svg" alt="Figma Logo" />
          </div>
          <img className=" relative left-1/2 -translate-x-1/4 top-0 rounded-xl min-w-90 md:group-hover:blur-[3px]"
          src="/portfolio-2025/projects/work-offset.png" 
          alt="browser screenshot" />
        </div>
        {/* TILE */}
        <div className="bg-primary overflow-hidden max-h-80 contain-content block px-7 py-3 md:col-start-14 md:col-end-17 md:row-start-1 md:row-end-5 rounded-2xl hover:drop-shadow-[0px_10px_2rem_rgba(255,255,255,0.1)] hover:rotate-2 hover:-translate-y-8 transition-all duration-500">
        <h1 className="text-right text-md font-light tracking-widest">
          Tool Visualiser</h1>
        <h2 className="text-right text-3xl mb-10 tracking-wider">
          Design</h2>
          <img className="h-70 aspect-auto relative left-1/2 -translate-x-1/4  "
          src="/portfolio-2025/projects/work-offset.png" 
          alt="browser screenshot" />
        </div>
        {/* TILE */}
        <div className="bg-secondary overflow-hidden max-h-80 p-7 block md:col-start-1 md:col-end-5 md:row-start-7 md:row-end-13 rounded-2xl hover:shadow-[0px_10px_2rem_rgba(255,255,255,0.1)] hover:-rotate-2 hover:-translate-y-3 transition-all duration-500">
          <h1 className="text-right text-md font-light tracking-widest text-no-wrap">
            Whack-A-Jacko</h1>
          <h2 className="text-right text-3xl tracking-wider mb-4">
            Mobile</h2>
          <img
          className="relative left-1/2 -translate-x-1/2"
            src="/portfolio-2025/projects/whackA-mobile.png"
            alt="mobile phone screen shot"
          />
        </div>
        {/* TILE */}
      <a className="bg-primary group overflow-hidden max-h-80 p-7 block md:col-start-5 relative md:col-end-12 md:row-start-5 md:row-end-10 rounded-2xl hover:shadow-[0px_10px_2rem_rgba(255,255,255,0.1)] hover:-rotate-2 hover:-translate-y-5 transition-all duration-500 "
      href="karen">
        <div className="">
        <h1 className="text-right text-md font-light tracking-widest">
          Karen-ipsum</h1>
        <h2 className="text-right text-3xl mb-3 tracking-wider">
          Full Stack</h2>
          {/* links */}
          <div className="space-x-3 absolute top-3/24 left-2/12 hidden md:group-hover:flex opacity-0 md:group-hover:opacity-100 md:group-hover:rotate-2">
            <a className="bg-white/20 py-2 px-6 hover:border-2 border-2 border-white/0 rounded-sm md:hover:rounded-full hover:border-white transition-all duration-300 ease-in " 
            href="https://www.karenipsum.com" target="_blank" ><div>See Live</div></a>
            <a className="bg-white/20 py-2 px-6 border-2 border-white/0 hidden lg:visible rounded-md md:hover:rounded-full hover:border-white" 
            href="https://github.com/Liamslost/karen-ipsum" target="_blank"><div>See Repo</div></a>
            <a className="bg-white/20 py-2 px-6 hover:border-2 border-2 border-white/0 rounded-sm md:hover:rounded-full hover:border-white transition-all duration-300 ease-in" 
            href=""><div>More...</div></a>
          </div>
          {/* icons */}
          <div className="bg-tertiary/90 h-fit w-fit z-10 gap-4 py-4 px-8 absolute -bottom-full md:group-hover:-bottom-2 md:group-hover:rotate-2 delay-100 flex justify-center rounded-t-2xl left-1/2 -translate-x-1/2 transition-all duration-300">
          <img className="size-5" src="/portfolio-2025/logos/typescript-original.svg" alt="Typesccript Logo" />
          <img className="size-5" src="/portfolio-2025/logos/react-original.svg" alt="Typesccript Logo" />
          <img className="size-5" src="/portfolio-2025/logos/mongodb-plain-wordmark.svg" alt="MongoDB Logo" />
          <img className="size-5" src="/portfolio-2025/logos/nodejs-original.svg" alt="NodeJS logo" />
          <img className="size-5" src="/portfolio-2025/logos/figma-original.svg" alt="Figma Logo" />
          <img className="size-5" src="/portfolio-2025/logos/heroku-original-wordmark.svg" alt="Heroku Logo" />
          </div>
          <img className="z-0 relative left-2/12 md:left-1/12 top-2/12  md:scale-100 rounded-sm md:rounded-xl md:group-hover:blur-[3px] min-w-90"
          src="/portfolio-2025/projects/karenIpsum.png" 
          alt="browser screenshot" />
        </div>
      </a>

        <div className="bg-primary overflow-hidden max-h-80 p-7 block md:col-start-12 md:col-end-17 md:row-start-5 md:row-end-10 rounded-2xl hover:shadow-[0px_10px_2rem_rgba(255,255,255,0.1)] hover:-rotate-1 hover:-translate-y-5 transition-all duration-500">
        <h1 className="text-right text-md font-light tracking-widest">
          Keyboard Warrior</h1>
        <h2 className="text-right text-3xl mb-3 tracking-wider">
          Browser</h2>
          <img className="relative left-1/12 rounded-md min-w-90"
          src="/portfolio-2025/projects/keyboard-warrior.png" 
          alt="browser screenshot" />
        </div>
      {/* TILE */}
        <div className="bg-primary group relative overflow-hidden px-7 py-3 block md:col-start-5 md:col-end-9 md:row-start-10 md:row-end-13 rounded-2xl hover:shadow-[0px_10px_2rem_rgba(255,255,255,0.1)]">
        <h1 className="text-right text-md font-light tracking-widest">
          Splitter</h1>
        <h2 className="text-right text-3xl mb-3 tracking-wider">
          React</h2>
                    {/* LINKS */}
                    <div className="space-x-3 absolute top-3/24 left-1/12 hidden md:group-hover:flex opacity-0 md:group-hover:opacity-100">
            <a className="bg-white/20 py-2 px-6 hover:border-2 border-2 border-white/0 rounded-sm md:hover:rounded-full hover:border-white transition-all duration-300 ease-in" 
            href=""><div>More...</div></a>
          </div>
          {/* icons */}
          <div className="bg-tertiary/90 h-fit w-fit z-10 gap-4 py-4 px-8 absolute -bottom-full md:group-hover:-bottom-0 flex justify-center rounded-t-2xl left-1/2 -translate-x-1/2 transition-all duration-300">
          <img className="size-5 " src="/portfolio-2025/logos/javascript-original.svg" alt="Illustrator Logo" />
          <img className="size-5 " src="/portfolio-2025/logos/react-original.svg" alt="Figma Logo" />
          </div>
          <img className="relative left-2/12 rounded-md md:group-hover:blur-[3px]"
          src="/portfolio-2025/projects/split.png" 
          alt="browser screenshot" />
        </div>
        <div className="bg-secondary block md:col-start-9 md:col-end-17 md:row-start-10 md:row-end-13 rounded-2xl "></div>
      </div>
    </div>
  );
}

export default Projects;
