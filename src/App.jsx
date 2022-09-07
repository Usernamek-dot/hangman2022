import { useEffect, useState } from "react";
import { HangmanImgs } from "./components/HangmanImgs";
import { Keyboard } from "./components/Keyboard";
import { getRandomWords } from "./helpers/words";
export const App = () => {
  const [ifLose, setIfLose] = useState(false);
  const [attempts, setAttempts] = useState(getRandomWords());
  const [hideWord, setHideWord] = useState("_ ".repeat(words.length));
  const hideWordArray = hideWord.split(" ");

  const restartGame = () => {
    const newWord = getRandomWords();
  };

  useEffect(() => {
    if (attempts === 9) {
      setIfLose(true);
    }
  }, []);
  useEffect(() => {
    const currentHidingWord = hideWord.split(" ").join(" ");
    if (currentHidingWord === words) {
      setIfLose(true);
    }
  }, []);

  const areWordsExisting = (letter) => {
    if (!words.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9));
      return;
    }
  };
  for (let i = 0; i < words.length; i++) {
    if (words[i] === letter) {
      hideWordArray[i] = letter;
    }
  }
  setHideWord(hideWordArray.join(" "));

  return (
    <>
      <div className="text-center">
        <div className="mx-auto flex flex-col justify-center items-center">
          <HangmanImgs imgNum={attempts} />
        </div>
        <h3 className="font-bold text-4xl my-4 text-blue-600">{hideWord}</h3>

        {ifLose ? <h3>Game over 🎲</h3> : <h3> You won </h3>}

        <h4>Attempts : {attempts} </h4>
        <Keyboard setAttempts={areWordsExisting} />
        {getRandomWords}
      </div>
    </>
  );
};
