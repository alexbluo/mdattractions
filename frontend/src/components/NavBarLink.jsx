import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

export default React.memo(({ to, children }) => {
  return (
    <li className="group relative inline cursor-pointer">
      <div className="absolute bottom-0 -z-10 h-0 w-full transform bg-gold duration-200 ease-in-out group-hover:h-full" />
      <NavLink
        className={({ isActive }) =>
          classNames(
            "flex h-full w-fit px-8 text-xl duration-100 ease-in group-hover:text-black",
            { "text-gold": !isActive },
            { "bg-gold text-black": isActive }
          )
        }
        to={to}
      >
        <span className="flex h-full -skew-x-[60deg] items-center">
          {children}
        </span>
      </NavLink>
    </li>
  );
});
