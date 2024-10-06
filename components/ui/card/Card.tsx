import React from "react";

import css from "./styles/card.module.css";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`${className ? className : ""} ${css.card}`}>
      {children}
    </div>
  );
};

export default Card;
