import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Buttons from "./Buttons";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageRounded, BiShare } from "react-icons/bi";

const NewCard = ({ title, role, imageUrl }) => {
  return (
    <div className=" rounded-xl overflow-hidden border shadow-2xl">
      {/* Top part */}
      <div className="relative w-full aspect-video bg-blue-500  ">
        <img
          src={imageUrl}
          alt="image"
          className="rounded-full h-full absolute left-[50%] translate-x-[-50%] translate-y-1/4 border-5  border-blue-500 p-1 bg-white"
        />
      </div>

      {/* secont post */}
      <div className="flex flex-col items-center pt-[4rem] pb-[2rem]">
        <h1 className="font-bold">{title}</h1>
        <p className="text-sm m-2">{role}</p>

        <div className="flex gap-[1rem]">
          <FaLinkedinIn className="p-2 border text-3xl bg-blue-700 text-white rounded-full" />
          <FaInstagram className="p-2 border text-3xl bg-pink-500 text-white rounded-full" />
          <FaTwitter className="p-2 border text-3xl bg-blue-400 text-white rounded-full" />
          <FaYoutube className="p-2 border text-3xl bg-red-400 text-white rounded-full" />
        </div>

        <div className="flex gap-[1rem] my-[2rem]">
          <Buttons title="Subscriber" />
          <Buttons title="Message" />
        </div>

        <div className="flex gap-4">
          <div className="flex items-center">
            <FaRegHeart />
            <span>60.4k</span>
          </div>
          <Line />

          <div className="flex items-center">
            <BiMessageRounded />
            <span>20k</span>
          </div>
          <Line />

          <div className="flex items-center">
            <BiShare />
            <span>12.4k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Line = () => {
  return <div className="w-[1px] h-[1.6rem] bg-black/20"></div>;
};

export default NewCard;
