function About() {
  return (
    <div className="min-h-[calc(100vh-11rem)] w-10/12 m-auto grid md:grid-cols-11 grid-cols-1 gap-5 pt-10 md:pt-25 pb-20">
      <div className=" h-10/12 md:h-fit contain-content rounded-2xl lg:col-span-3 md:col-span-4 border-2 border-tertiary m-auto">
        <img className="saturate-10 translate-y-[10%] md:translate-y-0 scale-150 md:scale-120" src="portfolio-2025/profie-pic-3.jpg" alt="tall dark handsome man" />
      </div>
      <div className="bg-secondary md:col-span-7 max-w-150 lg:col-span-8 py-4 px-10 space-y-4 text-sm text-text-primary rounded-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" >
        <h3 className="opacity-50">liamslost/README.md</h3>
        <h1 className="text-5xl font-bold">Hi.</h1>
        <p className="opacity-50">I&apos;m Liam, a full-stack developer and designer with a focus on React, TypeScript, and data-driven applications. I love solving problems through clean, efficient code and creating projects that balance performance, usability, and creativity.</p>
        <p className="opacity-50">My work spans from interactive visualizations (like a tool offset visualizer for machine operators) to web tools (like Karen Ipsum) and real-world applications that make complex data easier to understand. I take a practical, hands-on approach to development—iterating fast, learning from every project, and keeping things simple but effective.</p>
        <p className="opacity-50">I&apos;m currently freelancing, working on a mix of client projects and personal builds while sharpening my skills in data visualization, backend performance, and scalable architectures.</p>
        <p className="opacity-50">
        <i>When I&apos;m not coding, I&apos;m probably at the gym, planning my next adventure, or making slow but steady progress on learning Japanese.</i></p>
      </div>
    </div>
  );
}

export default About;
