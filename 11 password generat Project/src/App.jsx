import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [lenght, setLenght] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharactorAllowed, setIsChractoreAllowed] = useState(false);
  const [savedPassword, setSavedPassword] = useState([]);
  const passwordRef = useRef(null);
  const maxLength = 100;

  const generatePassword = () => {
    let pass = "";

    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumberAllowed) str += "0123456789";
    if (isCharactorAllowed) str += "~!@#$%^&*()_=-+/|,.;'";

    for (let i = 0; i <= lenght; i++) {
      const element = Math.floor(Math.random() * str.length);
      let charactorPick = str.charAt(element);
      pass += charactorPick;
    }
    setPassword(() => pass);
  };

  useEffect(() => {
    generatePassword();
  }, [lenght, isNumberAllowed, isCharactorAllowed]);

  const copyPasswordCLipBoard = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0, maxLength);
  };

  return (
    <>
      <div className="select-none flex flex-col gap-5 max-w-120 m-auto">
        <h1 className="text-center mt-5 font-bold ">Password Generator</h1>
        <input
          type="text"
          placeholder="Enter Password"
          readOnly={true}
          value={password}
          ref={passwordRef}
          className="outline-none border-none bg-gray-200 py-2 px-3 text-black rounded-lg"
        />

        <input
          type="range"
          min={0}
          max={maxLength}
          value={lenght}
          onChange={(e) => setLenght(e.target.value)}
        />

        <label htmlFor="number">
          <input
            id="number"
            type="checkbox"
            checked={isNumberAllowed}
            onChange={(e) => setIsNumberAllowed(e.target.checked)}
          />
          Number Allowed
        </label>

        <label htmlFor="charactor">
          <input
            id="charactor"
            type="checkbox"
            checked={isCharactorAllowed}
            onChange={(e) => setIsChractoreAllowed(e.target.checked)}
          />
          Charactor Allowed
        </label>

        <button
          className="bg-blue-500 py-2 rounded-lg"
          onClick={copyPasswordCLipBoard}
        >
          Copy Passward
        </button>
        <button
          className="bg-blue-500 py-2 rounded-lg"
          onClick={() => {
            setPassword(8);
            setIsNumberAllowed(false);
            setIsChractoreAllowed(false);
          }}
        >
          Resat Passward
        </button>
        <button
          className="bg-blue-500 py-2 rounded-lg"
          onClick={() => {
            setSavedPassword((prev) => [...prev, password]);
          }}
        >
          Save Passward
        </button>

        {savedPassword.map((items, ind) => {
          return <p key={ind}>{items}</p>;
        })}
      </div>
    </>
  );
}

export default App;
