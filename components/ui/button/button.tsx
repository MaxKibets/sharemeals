import React from "react";
import Link from "next/link";

import css from "./styles/button.module.css";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return href ? (
    <Link href={href} className={css.button}>
      {children}
    </Link>
  ) : (
    <button className={css.button}>{children}</button>
  );
};

export default Button;
