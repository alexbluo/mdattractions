import classNames from "classnames";

const DetailSection = ({ header, order, children }) => {
  return (
    <div
      className={classNames(
        "flex aspect-square flex-col gap-2 overflow-auto py-4 px-8",
        { "bg-gold text-black": order === "odd" },
        { "bg-red text-white": order === "even" }
      )}
    >
      <h2 className="text-2xl">{header}</h2>
      <div className="box-border h-full overflow-auto">{children}</div>
    </div>
  );
};

export default DetailSection;
