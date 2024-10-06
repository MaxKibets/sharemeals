import React from "react";

import css from "./styles/label.module.css";

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className={css.label}>
      {children}
    </label>
  );
};

export default Label;
