import { letters } from "../helpers/letters";
export const Keyboard = ({ setAttempts }) => {
  return (
    <>
      {letters.map((letter) => (
        <button
          onClick={() => {
            setAttempts(letter);
          }}
          className="bg-white p-4 rounded-full shadow-md m-2"
          key={letter}
        >
          {letter}
        </button>
      ))}
      <button className="mt-6 bg-blue-700 py-4 px-6 rounded-full text-white font-bold text-xl">
        Again ? 🕖
      </button>
    </>
  );
};
