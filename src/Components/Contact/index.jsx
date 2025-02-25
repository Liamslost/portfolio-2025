function Contact() {
  return (
    <div className=" max-w-[300px] md:max-w-[760px] lg:max-w-[1000px] xl:max-w-[1200px] m-auto grid md:grid-cols-2 grid-cols-1 gap-10 pb-20">
      <div>
        <h1 className="h-2/6 w-9/12 text-3xl text-text-primary pt-20 pb-8 tracking-[0.1rem] font-light">
          If you&apos;re passionate about building creative solutions, lets
          collaborate and make something awesome.
        </h1>
        <div className="h-4/6 w-full bg-secondary drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-2xl "></div>
      </div>
      <div className="bg-tertiary h-fit mt-20 rounded-2xl p-5">
        <div className="h-1/2 overflow-hidden ">
          <div className="size-[10rem] md:size-[18rem] mb-6 bg-secondary clipPath rounded-full relative m-auto">
            <img
              className="h-100 m-auto"
              src="public/avatar-combo.svg"
              alt="avatar"
            />
          </div>
        </div>
        <div className="h-1/2 w-full bg-primary rounded-2xl p-5 text-text-primary">
          <form>
            <div>
              <label className="opacity-50" htmlFor="name">
                Name
              </label>
              <input
                className="w-full h-8 bg-tertiary rounded-sm mt-1 mb-2 block"
                type="text"
                id="name"
              />
            </div>
            <div>
              <label className="opacity-50" htmlFor="name">
                Email
              </label>
              <input
                className="w-full h-8 bg-tertiary rounded-sm mt-1 mb-2 block"
                type="email"
                id="name"
              />
            </div>
            <div>
              <label className="opacity-50" htmlFor="name">
                Message
              </label>
              <textarea
                className="h-10 w-full  bg-tertiary rounded-sm mt-1 mb-3 block"
                type="text"
                id="name"
              />
              <input
                className="w-full bg-secondary py-2  rounded-sm cursor-pointer  hover:border-3 focus:border-3"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
