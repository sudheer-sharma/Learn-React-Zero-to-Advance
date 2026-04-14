import "./App.css";

const Navbar = ({ name, link, para }) => {
  return (
    <>
      <div className="cardImage">
        <div className="card">
          <img src={link} alt="" />
          <h3>{name}</h3>
          <p>{para}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
