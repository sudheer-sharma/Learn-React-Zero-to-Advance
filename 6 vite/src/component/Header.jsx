import { useState } from "react";

const Header = (props) => {
  let [headerData, setHeaderData] = useState("Hello, Calligraphy");

  function cahngeBack() {
    props.func(headerData);
  }

  return (
    <div onClick={cahngeBack} className="bg-red-500 text-3xl text-black">
      {props.data}
    </div>
  );
};

export default Header;
