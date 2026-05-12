import "./App.css";
import axios from "axios";
import FetxhData from "./componenet/FetxhData";
import ReactRouterDom from "./ReactRouterDom/Navbar";
import Navbar from "./ReactRouterDom/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./ReactRouterDom/Home";
import About from "./ReactRouterDom/About";
import Profile from "./ReactRouterDom/Profile";
import Contect from "./ReactRouterDom/Contect";
import Login from "./ReactRouterDom/Login";
import Singup from "./ReactRouterDom/Singup";

function App() {
  // const fetchData = async () => {
  // let response = await fetch("https://jsonplaceholder.typicode.com/users");
  // let data = await response.json();
  // console.log(data);
  //
  //
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  //
  //
  // let data = await axios.get("https://jsonplaceholder.typicode.com/users");
  // console.log(data);
  // };

  return (
    <>
      {/* <h1 className="text-3xl font-bold">Kailash Shiwagma</h1> */}
      {/* <h1>Kailash Shiwagma</h1>
      <button
        style={{ width: "5rem", margin: "3px auto", padding: "5px" }}
        onClick={fetchData}
      >
        Data
      </button> */}

      {/* <FetxhData /> */}

      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Singup" element={<Singup />} />
      </Routes>
    </>
  );
}

export default App;
