import "./App.css";
import axios from "axios";
import FetxhData from "./componenet/FetxhData";
import ReactRouterDom from "./ReactRouterDom/Navbar";
import Navbar from "./ReactRouterDom/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./ReactRouterDom/Home";
import About from "./ReactRouterDom/About";
import Profile from "./ReactRouterDom/Profile";
import Contect from "./ReactRouterDom/Contect";
import Login from "./ReactRouterDom/Login";
import Singup from "./ReactRouterDom/Singup";
import ContactDitails from "./ReactRouterDom/ContactDitails";
import A1 from "./ReactRouterDom/A1";
import A2 from "./ReactRouterDom/A2";
import A3 from "./ReactRouterDom/A3";

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

  console.log(window.history);

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
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route path="a1" element={<A1 />} />
          <Route path="a2" element={<A2 />} />
          <Route path="a3" element={<A3 />} />
        </Route>

        <Route path="/profile" element={<Profile />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/contect/:id" element={<ContactDitails />} />
        <Route path="/login" element={<Navigate to={"/Home"} />} />
        <Route path="/singup" element={<Singup />} />
      </Routes>
    </>
  );
}

export default App;
