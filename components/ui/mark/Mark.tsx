import React from "react";

import css from "./styles/mark.module.css";

type MarkProps = {
  children: React.ReactNode;
  danger?: boolean;
  className?: string;
};

const Mark: React.FC<MarkProps> = ({ children, danger, className }) => {
  return (
    <mark
      className={`${css.mark} ${danger ? css.danger : ""} ${className ? className : ""}`}
    >
      {children}
    </mark>
  );
};

export default Mark;
