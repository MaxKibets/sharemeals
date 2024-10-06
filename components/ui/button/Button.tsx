import React from "react";
import Link from "next/link";

import css from "./styles/button.module.css";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  href?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ href, children, type }) => {
  return href ? (
    <Link href={href} className={css.button}>
      {children}
    </Link>
  ) : (
    <button className={css.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
