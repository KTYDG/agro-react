import React from "react";
import styles from "./CrossButton.module.css";

const CrossButton = ({ className, ...props }) => {
  return (
    <button
      className={[styles.crossButton, className].join(" ")}
      {...props}
    >
      ✕
    </button>
  );
};

export default CrossButton;
