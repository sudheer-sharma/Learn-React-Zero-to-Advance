import Navbar from "./Navbar";
import "./App.css";

const NavbarCd = () => {
  return (
    <>
      <div className="divCard">
        <Navbar
          name="Nilam Moddi"
          link="https://www.mncgroup-vp.com/assets/img/chairman.png"
          para="I'm Chairmain of the mnc"
        />
        <Navbar
          name="Shushil Kumar Moddi"
          link="https://www.mncgroup-vp.com/assets/img/chairman.png"
          para="I'm Chairmain of the mnc"
        />
        <Navbar
          name="SanJai Nilla Bhansani"
          link="https://www.mncgroup-vp.com/assets/img/chairman.png"
          para="I'm Chairmain of the mnc"
        />
      </div>
    </>
  );
};

export default NavbarCd;
