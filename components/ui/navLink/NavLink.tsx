"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import css from "./styles/navLink.module.css";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`${css.link} ${path === href ? css.active : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
