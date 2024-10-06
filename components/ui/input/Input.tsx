import React from "react";

import css from "./styles/input.module.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => {
  return <input className={css.input} {...props} />;
};

export default Input;
