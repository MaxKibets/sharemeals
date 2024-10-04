import React from "react";

import css from "./styles/mark.module.css";

type MarkProps = {
  children: React.ReactNode;
};

const Mark: React.FC<MarkProps> = ({ children }) => {
  return <mark className={css.mark}>{children}</mark>;
};

export default Mark;
