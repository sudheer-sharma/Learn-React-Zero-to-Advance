const Footer = () => {
  return (
    <>
      <div className=" bg-amber-100 py-3.5 ">
        <header className="p-[1rem] max-w-[70rem] m-auto grid grid-cols-5 text-lg text-black/80  max-[850px]:grid-cols-3 max-[520px]:grid-cols-2">
          <div>
            <h1 className="text-3xl flex items-center">
              <span className="font-bold text-[tomato] text-5xl">B</span>rand
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-bold mb-4">First column line</h1>
            <a href="">Features🔻</a>
            <a href="">Use Cases🔻</a>
            <a href="">Integrations</a>
            <a href="">About us</a>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-bold mb-4">Second column line</h1>
            <a href="">Features🔻</a>
            <a href="">Use Cases🔻</a>
            <a href="">Integrations</a>
            <a href="">About us</a>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-bold mb-4">Third column line</h1>
            <a href="">Features🔻</a>
            <a href="">Use Cases🔻</a>
            <a href="">Integrations</a>
            <a href="">About us</a>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="font-bold mb-4">Four column line</h1>
            <a href="">Features🔻</a>
            <a href="">Use Cases🔻</a>
            <a href="">Integrations</a>
            <a href="">About us</a>
          </div>
        </header>

        <div className="border-b mt-9 mb-9"></div>

        <div className="flex max-w-[70rem] m-auto flex justify-between">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut unde
            doloribus quia ut quam, voluptatibus labore illum! Aut ut cumque
            quis mollitia, voluptatum nihil debitis commodi distinctio,
            explicabo voluptate ea.
          </p>
          <div className="flex gap-5">
            <a href="">❤️</a>
            <a href="">😍</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
