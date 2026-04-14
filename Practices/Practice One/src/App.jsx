import { useState } from "react";
import "./App.css";
import Questions from "./componenet/Questions";
import Times from "./componenet/Times";
import Buttons from "./componenet_2/Buttons";

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
  // component 2

  const [popup, setPopup] = useState(false);

  return (
    <div>
      <button
        onClick={() => setPopup(true)}
        className="px-4 py-2 mt-[20rem] border text-white rounded-lg"
      >
        Show Popup
      </button>

      {popup && (
        <div className="w-screen h-screen absolute top-0 left-0 bg-black/50 flex items-center justify-center">
          <button
            onClick={() => setPopup(false)}
            className="border p-2 absolute top-5 right-5 bg-neutral-900 rounded-xl"
          >
            ❌
          </button>

          <div className="h-full w-full max-h-[20rem] max-w-[25rem] bg-[#242424]">
            <h1>⚠️ Delete</h1>
            <p>This page is a delete Emidatly now</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
