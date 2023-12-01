import React from "react";
import classnames from "classnames";
import styles from "./MyButton.module.css";

const MyButton = ({ children, className, ...props }) => {
  return (
    <button className={classnames(styles.myButton, className)} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
