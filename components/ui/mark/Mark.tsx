import React from "react";

import css from "./styles/mark.module.css";

type MarkProps = {
  children: React.ReactNode;
  danger?: boolean;
};

const Mark: React.FC<MarkProps> = ({ children, danger }) => {
  return (
    <mark className={`${css.mark} ${danger ? css.danger : ""}`}>
      {children}
    </mark>
  );
};

export default Mark;
