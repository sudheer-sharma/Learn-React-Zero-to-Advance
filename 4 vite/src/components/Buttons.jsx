const Buttons = ({ title }) => {
  return (
    <div>
      <button className="bg-blue-500 px-5 py-1 rounded-2xl text-white text-[15px]">
        {title}
      </button>
    </div>
  );
};

export default Buttons;
