function Navbar({ data }) {
  return (
    <>
      {" "}
      <Buttons data={data} />{" "}
    </>
  );
}

function Buttons({ data }) {
  return (
    <>
      <button>{data}</button>
    </>
  );
}

export default Navbar;
