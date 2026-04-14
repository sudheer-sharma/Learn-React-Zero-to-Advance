import Buttons from "./Buttons";
import { MdJoinFull } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="p-[2rem] bg-amber-100 py-3.5 ">
        <header className="max-w-[60rem] m-auto flex justify-between items-center text-lg text-black/80">
          <div>
            <h1 className="text-3xl flex items-center">
              <span className="font-bold text-[tomato] text-5xl">B</span>rand
            </h1>
          </div>
          <div className="flex gap-7 max-[750px]:hidden">
            <a href="">Features🔻</a>
            <a href="">Use Cases🔻</a>
            <a href="">Integrations</a>
            <a href="">About us</a>
          </div>
          <div>
            <Buttons title="Join us" />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
