import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-gold to-red">
      <div className="fixed z-10 flex h-full w-full flex-col items-center justify-center">
        <h1 className="mb-6 animate-fade-in-down select-none bg-[url('images/flag.gif')] bg-clip-text bg-top py-1 font-montserrat text-5xl font-[1000] text-transparent opacity-90">
          Maryland Attractions Searcher
        </h1>
        <Link to="/attractions">
          <button className="animate-fade-in-up rounded-md bg-red px-4 py-2 text-white shadow-md duration-200 hover:shadow-white">
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
