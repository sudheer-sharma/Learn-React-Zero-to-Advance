const Buttons = ({ color, setSelectColort, children }) => {
  function setColors() {
    setSelectColort(color);
  }

  return (
    <div>
      <button
        style={{ backgroundColor: color, color: "black" }}
        className=" border px-3 py-1 rounded-2xl text-xl"
        onClick={setColors}
      >
        {children}
      </button>
    </div>
  );
};

export default Buttons;
