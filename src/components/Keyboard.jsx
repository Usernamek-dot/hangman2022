import { useState } from "react";
import { writerKeys } from "../helpers/writerKeys";
export const Keyboard = ({ counter, setCounter }) => {
  // const [counter, setCounter] = useState(0);

  const validateWords = (writerKey) => {
    setCounter(counter + 1);
  };
  return (
    <>
      {writerKeys.map((writerKey) => (
        <button
          key={writerKey}
          onClick={() => validateWords(writerKey)}
          className=" hover:bg-gray-900 bg-gray-700 text-gray-100 p-4 rounded-full shadow-md m-2"
        >
          {writerKey}
        </button>
      ))}
    </>
  );
};
