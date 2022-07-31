import clsx from "clsx";
import React from "react";

export interface ICard {
  classname?: string;
}

const Card: React.FC<ICard> = (props) => {
  const { children, classname, ...rest } = props;
  return (
    <div
      className={clsx(
        "bg-slate-600 rounded-lg mb-4 p-4 flex items-center text-white",
        classname
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
