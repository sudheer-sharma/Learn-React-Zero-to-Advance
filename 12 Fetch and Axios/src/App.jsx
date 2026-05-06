import "./App.css";
import axios from "axios";
import FetxhData from "./componenet/FetxhData";

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
      <h1 className="text-3xl font-bold">Kailash Shiwagma</h1>
      {/* <h1>Kailash Shiwagma</h1>
      <button
        style={{ width: "5rem", margin: "3px auto", padding: "5px" }}
        onClick={fetchData}
      >
        Data
      </button> */}

      <FetxhData />
    </>
  );
}

export default App;
