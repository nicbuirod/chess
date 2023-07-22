import React from "react";

import styles from "./square.module.scss";

const Square = ({ isBlack }) => {
  const squareColor = isBlack ? styles.black : styles.white;
  return <div className={`${squareColor}`}></div>;
};

export default Square;
