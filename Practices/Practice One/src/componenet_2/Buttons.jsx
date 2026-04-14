const Buttons = ({ title }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-[18rem]">
      <button className="px-4 py-2 m-2 bg-blue-500 text-white rounded">
        {title}
      </button>
    </div>
  );
};

export default Buttons;
