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

      <div className="flex justify-around">
        <div className="bg-gray-500 text-gray-100 block p-6 rounded-lg shadow-lg max-w-sm">
          <Images imgIndex={counter} />

          <h5 className="text-gray-100 text-xl leading-tight font-medium mb-2">
            {hideWord}
          </h5>
        </div>
      </div>
      {lostGame ? (
        <h5 className="text-gray-100 text-xl leading-tight font-medium mb-2">
          GAME OVER! the hidden word is <strong> {words}</strong>
        </h5>
      ) : (
        ""
      )}
      {wonGame ? (
        <h5 className="text-gray-100 text-xl leading-tight font-medium mb-2">
          NICE TRY!
        </h5>
      ) : (
        ""
      )}

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
    </>
  );
};
