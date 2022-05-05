import { useState } from "react";
import { useDispatch } from "react-redux";
// import { add } from "../redux/filtersSlice";

export default function Search() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="my-1 flex h-16 w-full gap-1 rounded-md border-4 bg-black">
      <input
        className="w-full rounded-l bg-gold pl-4 font-raleway text-lg outline-none focus:brightness-90"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="group aspect-square h-full rounded-r text-gold duration-200 hover:bg-gold active:brightness-50"
        // onClick={dispatch(add({ category: search, filter: text }))}
      >
        <svg
          className="mx-auto h-1/2 w-1/2 fill-gold duration-200 group-hover:fill-black"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
        </svg>
      </button>
    </div>
  );
}