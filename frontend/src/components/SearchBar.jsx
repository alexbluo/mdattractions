import { useState } from "react";

const SearchBar = ({ onSearchInput, onSearchEnter }) => {
  const [input, setInput] = useState("");

  return (
    <div className="mb-1 flex h-16 w-full gap-1 rounded-md border-4 bg-black duration-150 ease-in-out focus-within:outline focus-within:outline-gold/50">
      <input
        className="w-full rounded-l bg-gold pl-4 font-raleway text-lg outline-none"
        type="text"
        onChange={(e) => onSearchInput(e)}
      />
      <button
        className="group aspect-square h-full rounded-r text-gold duration-150 ease-in-out hover:bg-gold active:brightness-75"
        onClick={onSearchEnter}
      >
        <svg
          className="mx-auto h-1/2 w-1/2 fill-gold duration-150 ease-in-out group-hover:fill-black"
          viewBox="0 0 50 50"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
