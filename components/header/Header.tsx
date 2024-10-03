import React from "react";
import Link from "next/link";
import Image from "next/image";

import css from "./styles/header.module.css";

const Header: React.FC = () => {
  return (
    <header className={css.header}>
      <Link href="/" className={css.logoWrap}>
        <Image src="/logo.svg" alt="Burger logo" width={60} height={60} />
        <span>
          Share
          <br />
          meals
        </span>
      </Link>
      <nav>
        <ul className={css.links}>
          <li>
            <Link href="/community">Community</Link>
          </li>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
