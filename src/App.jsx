import { useState } from "react";
import { Images } from "./components/Images";
import { Keyboard } from "./components/Keyboard";
import { Navbar } from "./components/Navbar";
import { getRandomWords } from "./helpers/words";

export const App = () => {
  const [wonGame, setWonGame] = useState(false);
  const [lostGame, setLostGame] = useState(false);
  const [counter, setCounter] = useState(0);
  const [words, setWords] = useState(getRandomWords());
  const [hideWord, setHideWord] = useState("_ ".repeat(words.length));

  const resetGame = () => {
    const newWord = getRandomWords();
    setWords(newWord);
    setHideWord("_ ".repeat(newWord.length));
    setLostGame(false);
    setWonGame(false);
    setCounter(0);
  };

  return (
    <>
      <Navbar counter={counter} />

      <div className="p-4 flex justify-between">
        <div className="flex-auto w-64">
          <Images hideWord={hideWord} imgIndex={counter} />
        </div>
        <div className="flex-auto w-32">
          <Keyboard
            setWonGame={setWonGame}
            setLostGame={setLostGame}
            lostGame={lostGame}
            wonGame={wonGame}
            hideWord={hideWord}
            setHideWord={setHideWord}
            words={words}
            counter={counter}
            setCounter={setCounter}
          />
          <button
            onClick={() => resetGame()}
            type="button"
            className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Play again
          </button>
        </div>
      </div>
      {lostGame ? (
        <div className=" m-5">
          <div
            className=" py-5 px-6  mb-3 bg-stone-900 text-indigo-700  rounded-lg text-base  inline-flex items-center w-full "
            role="alert"
          >
            GAME OVER!
            <span className="font-bold text-indigo-800 m-1"> {words} </span> Was
            the hidden word.
          </div>
        </div>
      ) : (
        ""
      )}
      {wonGame ? (
        <div className=" m-5">
          <div
            className=" py-5 px-6  mb-3 bg-stone-900 text-indigo-700  rounded-lg text-base  inline-flex items-center w-full "
            role="alert"
          >
            Good job! 🙋
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
