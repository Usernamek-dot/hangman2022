import { letters } from "../helpers/letters";
export const Keyboard = () => {
  return (
    <>
      <div className="text-center">
        {/* Imágenes */}

        {/* Palabra Oculta */}
        <h3 className="font-bold text-4xl my-4 text-blue-600">_ _ _ _ _ _</h3>

        <h3>You won</h3>
        <h3>Game over 🎲 </h3>
        <h4>Attempts : </h4>
        {letters.map((letter) => (
          <button
            className="bg-white p-4 rounded-full shadow-md m-2"
            key={letter}
          >
            {letter}
          </button>
        ))}
        <button className="mt-6 bg-blue-700 py-4 px-6 rounded-full text-white font-bold text-xl">
          Again ? 🕖
        </button>
      </div>
    </>
  );
};
