export const Navbar = ({ counter }) => {
  return (
    <nav className="sticky top-0 w-full flex flex-wrap items-center justify-between py-3 bg-stone-900 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <a className=" text-xl text-stone-500 font-semibold" href="#">
          Hangman App
        </a>
        <button
          type="button"
          class="inline-block px-6 py-2 border-2 border-stone-500 text-stone-500  font-medium text-xs leading-tight uppercase rounded hover:bg-stone-300 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Times you have tried"
        >
          {counter}
        </button>
      </div>
    </nav>
  );
};
