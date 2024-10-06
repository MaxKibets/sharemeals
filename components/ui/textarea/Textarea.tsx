import React from "react";

import css from "./styles/textarea.module.css";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<TextareaProps> = (props) => {
  return <textarea className={css.textarea} {...props} />;
};

export default Textarea;
