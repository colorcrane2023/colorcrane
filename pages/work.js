const Work = () => {
  return (
    <div className="relative">
      <nav className="bg-yellow-200 pt-2 pb-2 fixed w-full">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-shrink-0 items-center">
            <img src="/logo.png" height={30}></img>
          </div>
          <div className="mt-3 ml-10">
            <div className="flex space-x-10">
              <a
                href="#"
                className="rounded-md px-3 py-2 font-medium  text-black hover:text-white hover:bg-black text-3xl"
                aria-current="page"
              >
                Home
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 font-medium text-3xl text-black hover:text-white hover:bg-black"
              >
                Work
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 font-medium text-3xl text-black hover:text-white hover:bg-black"
              >
                Contact
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-2 font-medium text-3xl text-black hover:text-white hover:bg-black"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="grid grid-cols-2 gap-2  pl-20 pr-20">
        <div className="h-28"></div>
        <div className="h-28"></div>
        <div className="p-2">
          <img src="portfolio.png" className="rounded-xl"></img>
        </div>
        <div className="p-2 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="p-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div>
          <img src="portfolio.png" className="rounded-xl"></img>
        </div>
      </div>
    </div>
  );
};

export default Work;
