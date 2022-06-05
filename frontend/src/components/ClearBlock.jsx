import classnames from "classnames";

const ClearBlock = ({ onClick, reverse, children }) => {
  return (
    <div
      className={classnames(
        "flex h-16 max-w-full gap-1 rounded-md border-4 bg-black xl:w-full",
        { "flex-row-reverse": reverse }
      )}
    >
      <div
        className={classnames(
          "flex items-center justify-center overflow-hidden bg-gold px-4 font-raleway text-lg focus:brightness-90 xl:w-1/2",
          { "rounded-r": reverse },
          { "rounded-l": !reverse }
        )}
        type="text"
      >
        <span className="truncate">{children}</span>
      </div>
      <button
        className={classnames(
          "group aspect-square h-full text-gold duration-150 ease-in-out hover:bg-gold focus:outline focus:outline-offset-4 focus:outline-gold/50 active:brightness-75 xl:w-1/2",
          { "rounded-l": reverse },
          { "rounded-r": !reverse }
        )}
        onClick={onClick}
      >
        <svg
          className="mx-auto h-1/2 w-1/2 fill-gold duration-150 ease-in-out group-hover:fill-black"
          viewBox="0 0 16 16"
        >
          <path d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
          <path d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
        </svg>
      </button>
    </div>
  );
};

export default ClearBlock;