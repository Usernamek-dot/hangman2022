import { useState } from "react";
import { Images } from "./components/Images";
import { Keyboard } from "./components/Keyboard";

export const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Attepmts #
        </h5>
        <div className="bg-gray-500 text-gray-900 block p-6 rounded-lg shadow-lg max-w-sm">
          <Images imgIndex={counter} />

          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            _ _ _ _ _ _ _ _ _ _ _ _
          </h5>

          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            GAME OVER
          </h5>
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            NICE TRY!
          </h5>
        </div>
      </div>
      <Keyboard counter={counter} setCounter={setCounter} />
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
      >
        Play again
      </button>
    </>
  );
};
