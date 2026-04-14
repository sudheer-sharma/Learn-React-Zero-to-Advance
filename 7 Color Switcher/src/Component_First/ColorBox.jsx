const ColorBox = ({ color }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="h-[25rem] w-[28rem] border m-auto rounded-xl text-4xl text-black content-center"
    >
      {color.toUpperCase()}
    </div>
  );
};

export default ColorBox;
