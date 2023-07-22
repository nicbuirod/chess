import React from "react";
import styles from "./chessboard.module.scss";
import { Square } from "../square";

const ChessBoard = () => {
  const squares = [];
  const rowLabels = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const colLabels = ["a", "b", "c", "d", "e", "f", "g", "h"];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const isBlack = (row + col) % 2 === 1;
      squares.push(<Square isBlack={isBlack} />);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.label_column_container}>
        {colLabels.map((e) => {
          return <div className={styles.column_label}>{e}</div>;
        })}
      </div>
      <div className={styles.rows}>
        <div className={styles.label_row_container}>
          {rowLabels.map((e) => {
            return <div className={styles.column_label}>{e}</div>;
          })}
        </div>
        <div className={styles.board}>{squares}</div>
      </div>
    </div>
  );
};

export default ChessBoard;
