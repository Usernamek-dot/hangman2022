import { HangmanImgs } from "./components/HangmanImgs";
import { Keyboard } from "./components/Keyboard";

export const App = () => {
  return (
    <>
      <Keyboard />
      <HangmanImgs imgNum={0} />
    </>
  );
};
