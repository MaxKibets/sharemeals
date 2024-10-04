import React from "react";

import css from "./styles/section.module.css";

type SectionProps = {
  marginLg?: boolean;
  centered?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  className = "",
  children,
  centered,
  marginLg,
}) => {
  return (
    <section
      className={`${css.section} ${className} ${centered ? css.centered : ""} ${marginLg ? css.marginLg : ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
