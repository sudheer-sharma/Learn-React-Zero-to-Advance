import { useRef } from "react";

const InputesFomrs = () => {
  const inputref = useRef(null);

  function inputValue() {
    console.log(inputref.current.value);
  }

  return (
    <div>
      <input ref={inputref} type="text" placeholder="Enter Valus" />
      <button onClick={inputValue}>Submit</button>

      <h1>{inputref?.current?.value}</h1>
    </div>
  );
};

export default InputesFomrs;
