import Buttons from "./Buttons";

const Hero = () => {
  return (
    <div className="max-w-[60rem]  m-auto text-center py-[8rem] px-[1rem]">
      <h1 className=" text-7xl font-medium max-[710px]:text-6xl max-[500px]:text-4xl">
        The best way to <span>review</span> creative assets
      </h1>

      <p className="text-lg my-7">
        Store collabrate and share your markating matorarike Ship
        high-performance creative 10x faster.
      </p>

      <div className="text-2xl max-[300px]:text-sm">
        <Buttons title="Join Subscriptions" />
      </div>
    </div>
  );
};

export default Hero;
