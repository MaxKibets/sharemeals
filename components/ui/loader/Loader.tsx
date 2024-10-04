import React from "react";

import css from "./styles/loader.module.css";

type LoaderProps = {
  fixed?: boolean;
};

const Loader: React.FC<LoaderProps> = ({ fixed }) => {
  return <div className={`${css.loader} ${fixed ? css.fixed : ""}`}>...</div>;
};

export default Loader;
