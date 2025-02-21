function Projects() {


  const Projects = [
    {
      name: "Karen-Ipsum",
      languages: [
        "public/logos/typescript-original.svg",
        "public/logos/tailwindcss-plain.svg",
        "public/logos/react-original.svg",
        "public/logos/heroku-original-wordmark.svg",
        "public/logos/figma-original.svg",
        "public/logos/mongodb-plain-wordmark.svg",

      ],
      image: "",
      blurb: "",
    },
    {
      name: "Whack-O-Jacko",
      languages: "",
      image: "",
      blurb: "",
    },
    {
      name: "Keyboard Warrior",
      languages: "",
      image: "",
      blurb: "",
    },
    {
      name: "Splitter",
      languages: "",
      image: "",
      blurb: "",
    },
  ];

  return (
    <section className=" w-[1200px]  m-auto">
      <div>
        <h1 className="text-text-primary text-5xl p-4 font-semibold">
          Hi. I&apos;m Liam
        </h1>
      </div>
      <div>
        <h1 className="w-5/12 text-3xl text-text-primary mt-20 mb-8 tracking-[0.1rem]">
          full-stack applications, data visualizations, and interactive tools -
          built with performance, <u>usability</u>, and creativity in mind.
        </h1>
        {/* top */}
        <div className="h-90 bg-secondary mb-6 rounded-2xl grid grid-cols-2 gap-5 p-4">
          <div className=" bg-tertiary rounded-2xl">left</div>
          <div className="grid grid-rows-2 gap-y-5">
            <div className="bg-primary rounded-2xl"></div>
            <div className="bg-primary rounded-2xl"></div>
          </div>
        </div>
        {/* middle */}
        <div className="h-90 mb-6 rounded-2xl grid grid-cols-3 gap-5 ">
          {/* left */}
          <div className="bg-tertiary rounded-2xl"></div>
          <div className="grid grid-rows-2 gap-5 rounded-2xl">
            <div className="bg-tertiary rounded-2xl"></div>
            {/* right */}
            <div className="bg-secondary rounded-2xl"></div>
          </div>
          <div className="bg-secondary rounded-2xl"></div>
        </div>
        {/* bottom */}
        <div className="w-full  bg-tertiary p-4 grid grid-cols-4 my-6 rounded-2xl gap-5">
          <div className="h-full w-full bg-primary rounded-2xl">
            <div className="w-full h-1/2 rounded-t-xl contain-content">
              <img src="public/Placeholder.png" alt="" />
            </div>
            <div className="w-full h-1/2"></div>
          </div>
          <div className="h-90 w-full bg-primary rounded-2xl"></div>
          <div className="h-90 w-full bg-primary rounded-2xl"></div>
          <div className="h-90 w-full bg-primary rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
