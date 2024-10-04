import React from "react";
import Link from "next/link";
import Image from "next/image";

import css from "./styles/header.module.css";
import { NavLink } from "../ui";

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
            <NavLink href="/community">Community</NavLink>
          </li>
          <li>
            <NavLink href="/meals">Meals</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
