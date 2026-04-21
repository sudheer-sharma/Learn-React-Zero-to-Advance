import { useState } from "react";
import "./App.css";

function App() {
  let [state, setState] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter Value"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <button onClick={() => setState("")}>Reaset</button>

        <h1>{state}</h1>
      </div>
    </>
  );
}

export default App;
