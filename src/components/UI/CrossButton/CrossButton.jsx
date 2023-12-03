import React from "react";
import classnames from "classnames";
import styles from "./CrossButton.module.css";

const CrossButton = ({ className, ...props }) => {
  return (
    <button
      type="button"
      className={classnames(styles.crossButton, className)}
      {...props}
    >
      ✕
    </button>
  );
};

export default CrossButton;
