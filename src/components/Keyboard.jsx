import { useEffect } from "react";
import { writerKeys } from "../helpers/writerKeys";

export const Keyboard = ({
  lostGame,
  wonGame,
  setWonGame,
  setLostGame,
  setHideWord,
  hideWord,
  words,
  counter,
  setCounter,
}) => {
  useEffect(() => {
    const currentHiddenWord = hideWord.split(" ").join("");

    if (currentHiddenWord === words) {
      setWonGame(true);
    }
  }, [hideWord]);

  useEffect(() => {
    if (counter >= 9) {
      setLostGame(true);
    }
  }, [counter]);

  const validateWords = (writerKey) => {
    if (wonGame) return;
    if (lostGame) return;

    const hideWordArray = hideWord.split(" ");
    for (let index = 0; index < words.length; index++) {
      if (words[index] === writerKey) {
        hideWordArray[index] = writerKey;
      }
    }
    setHideWord(hideWordArray.join(" "));

    if (!words.includes(writerKey)) {
      setCounter(Math.min(counter + 1, 9));
      return;
    }
  };
  return (
    <>
      {writerKeys.map((writerKey) => (
        <button
          key={writerKey}
          onClick={() => validateWords(writerKey)}
          className="max-w-sm  hover:bg-gray-900 bg-gray-700 text-gray-100 p-2 rounded-full shadow-md m-2"
        >
          {writerKey}
        </button>
      ))}
    </>
  );
};
