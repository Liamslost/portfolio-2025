function Projects() {
  const ProjectsData = [
    {
      name: "Karen-Ipsum",
      languages: [
        "/logos/typescript-original.svg",
        "/logos/react-original.svg",
        "/logos/tailwindcss-plain.svg",
        "/logos/heroku-original-wordmark.svg",
        "/logos/figma-original.svg",
        "/logos/mongodb-plain-wordmark.svg",
        "/logos/typescript-original.svg",
        "/logos/react-original.svg",
        "/logos/tailwindcss-plain.svg",
        "/logos/heroku-original-wordmark.svg",
        "/logos/figma-original.svg",
        "/logos/mongodb-plain-wordmark.svg",
      ],
      image: "/projects/karenIpsum.png",
      blurb:
        "The Karen Project currently functions as a clean, interactive Lorem Ipsum generator, providing a modern approach to creating placeholder text. Looking ahead, I plan to expand it with customizable templates and interactive features, transforming it into a versatile tool for generating and refining digital content.",
    },
    {
      name: "Whack-O-Jacko",
      languages: [
        "/logos/javascript-original.svg",
        "/logos/css3-original.svg",
        "/logos/html5-original.svg",
        "/logos/illustrator-plain.svg",
        "/logos/docker-plain-wordmark.svg",
        "/logos/javascript-original.svg",
        "/logos/css3-original.svg",
        "/logos/html5-original.svg",
        "/logos/illustrator-plain.svg",
        "/logos/docker-plain-wordmark.svg",
        "/logos/javascript-original.svg",
        "/logos/css3-original.svg",
      ],
      image: "/projects/Whack-a-Jacko.png",
      blurb:
        "A Whack-a-mole style game with a halloween theme. This was a 4 day group project at IO Academy within our first 6 weeks. I was responsible for the start and finish modal design and functionality, I also created all teh artwork for the project.",
    },
    {
      name: "Keyboard Warrior",
      languages: [
        "/logos/typescript-original.svg",
        "/logos/react-original.svg",
        "/logos/tailwindcss-plain.svg",
        "/logos/figma-original.svg",
        "/logos/typescript-original.svg",
        "/logos/react-original.svg",
        "/logos/tailwindcss-plain.svg",
        "/logos/figma-original.svg",
        "/logos/typescript-original.svg",
        "/logos/react-original.svg",
        "/logos/tailwindcss-plain.svg",
        "/logos/figma-original.svg",
      ],
      image: "/projects/keyboard-warrior.png",
      blurb:
        "Think 'GuitarHero' with a functional twist. Aimed at keyboard training with a fun gamification interface. This project was a joint venture with a friend and is still underway. Accuracy is rewarded with bonus points and currently has a mode selector - easy, hard and pro.",
    },
    {
      name: "Splitter",
      languages: [
        "/logos/react-original.svg",
        "/logos/tailwindcss-plain.svg",
        "/logos/css3-original.svg",
        "/logos/react-original.svg",
        "/logos/tailwindcss-plain.svg",
        "/logos/css3-original.svg",
        "/logos/react-original.svg",
        "/logos/tailwindcss-plain.svg",
        "/logos/css3-original.svg",
        "/logos/react-original.svg",
        "/logos/tailwindcss-plain.svg",
        "/logos/css3-original.svg",
        "/logos/react-original.svg",
        "/logos/tailwindcss-plain.svg",
        "/logos/css3-original.svg",
      ],
      image: "/projects/split.png",
      blurb:
        "Spliiter was one of my first React projects that i gave myself 3 evenings to 'complete'. I was happy eith how it turned out and i keep it aaround to remind myself how far I have come over the past year. The functionlity is there but given more time I would redesign the UI as i now know how common a project it is.",
    },
  ];

  return (
    <section className=" w-[1200px]  m-auto">
      <div>
        <h1 className="w-5/12 text-3xl text-text-primary mt-20 mb-8 tracking-[0.1rem]">
          full-stack applications, data visualizations, and interactive tools -
          built with performance, <u>usability</u>, and creativity in mind.
        </h1>
        {/* top */}
        <div className="h-90 bg-secondary mb-6 rounded-2xl grid grid-cols-2 gap-5 p-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          <div className=" bg-tertiary rounded-2xl">left</div>
          <div className="grid grid-rows-2 gap-y-5">
            <div className="bg-primary rounded-2xl"></div>
            <div className="bg-primary rounded-2xl"></div>
          </div>
        </div>
<div className="w-full relative">
        <h1 className="w-4/12 text-3xl text-text-primary mt-20 mb-8 tracking-[0.1rem] relative left-200">
          full-stack applications, data visualizations, and interactive tools -
          built with performance, <u>usability</u>, and creativity in mind.
        </h1>
</div>
        {/* middle */}
        <div className="h-65 mb-6 rounded-2xl grid grid-cols-3 gap-5 ">
          {/* left */}
          <div className="bg-tertiary rounded-2xl"></div>
          <div className="h-full space-y-3 rounded-2xl contain-content overflow-hidden ">

            <div className="h-8 bg-tertiary rounded-2xl overflow-hidden">
              <img src="public/projects/work-offset.png" alt="" />
            </div>
            {/* right */}
            <div className="h-full bg-secondary rounded-2xl ">
            <img src="public/projects/win95.png" alt="" />

            </div>
          </div>
          <div className="bg-secondary rounded-2xl">
          </div>
        </div>
        {/* bottom */}
        <div className="w-full  bg-tertiary p-4 grid grid-cols-4 my-6 rounded-2xl gap-5 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          {ProjectsData.map((project, index) => (
            <div key={index} className="h-full w-full bg-primary rounded-2xl">
              <div className="w-full h-5/12 rounded-t-xl contain-content ">
                <img
                  className="scale-250 translate-y-25 translate-40 hover:scale-133 hover:translate-y-3 hover:translate-x-0 transition-all  duration-500 ease-in-out"
                  src={project.image}
                  alt={project.name}
                />
              </div>
              <div className="w-full h-7/12 overflow-hidden">
                <div className="h-3/12 pt-4 flex animate-scroll w-[200%]">
                  {project.languages.map((lang, i) => (
                    <img
                      key={i}
                      src={lang}
                      alt="language logo"
                      className="carousel-image inline-block h-2/3 mx-8"
                    />
                  ))}
                </div>
                <div className="mx-3">
                  <h3 className="mb-2  text-text-primary opacity-50">
                    {project.name}
                  </h3>
                  <p className="text-sm font-extralight  text-text-primary opacity-50">
                    {project.blurb}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
