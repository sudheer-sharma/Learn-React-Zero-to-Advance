import { useState } from "react";
import "./App.css";
import Questions from "./componenet/Questions";
import Times from "./componenet/Times";
import Buttons from "./componenet_2/Popup";
import Popup from "./componenet_2/Popup";
import Navbar from "./componenet_2/Navbar";

function App() {
  // return (
  //   <>
  //     {/* componenet wala hai */}
  //     {/* <h1>Questions</h1>
  //     <Times />
  //     <Questions /> */}
  //   </>
  // );
  //
  //
  //
  // component 2 Popup
  // const [popup, setPopup] = useState(false);
  // const [editPopup, seEditPopup] = useState(false);
  // return (
  //   <div className="flex justify-center gap-5">
  //     <button
  //       onClick={() => setPopup(true)}
  //       className="bg-black px-4 py-2 mt-[20rem] border text-white rounded-lg"
  //     >
  //       Delete
  //     </button>
  //     <Popup
  //       popup={popup}
  //       setPopup={setPopup}
  //       title={"Delete"}
  //       desription="This page is a delete Emidatly now"
  //     />
  //     <button
  //       onClick={() => seEditPopup(true)}
  //       className="bg-black px-4 py-2 mt-[20rem] border text-white rounded-lg"
  //     >
  //       Edit
  //     </button>
  //     <Popup
  //       popup={editPopup}
  //       setPopup={seEditPopup}
  //       title="Edit"
  //       desription="This page is a Edit Emidatly now"
  //     />
  //   </div>
  // );
  //
  //
  //
  // componenet 2 Navbar

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
