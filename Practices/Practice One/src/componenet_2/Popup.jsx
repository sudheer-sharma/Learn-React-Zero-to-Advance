import React from "react";

const Popup = ({ popup, setPopup, title, desription }) => {
  return (
    <>
      {popup && (
        <div className="w-screen h-screen absolute top-0 left-0 bg-black/50 flex items-center justify-center">
          <button
            onClick={() => setPopup(false)}
            className="border p-2 absolute top-5 right-5 bg-neutral-900 rounded-xl"
          >
            ❌
          </button>

          <div className="h-full w-full max-h-[20rem] max-w-[40rem] bg-[#242424] flex flex-col justify-center items-center rounded-2xl">
            <h1 className="text-2xl">⚠️ {title}</h1>
            <p className="text-lg">{desription}</p>

            <div className="flex  gap-3 mt-5">
              <button className="text-2xl border px-3 py-1 rounded-lg bg-green-300 text-black">
                Yes
              </button>
              <button className="text-2xl border px-3 py-1 rounded-lg bg-red-500 text-black">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
