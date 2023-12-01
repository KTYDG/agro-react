import React from "react";
import classnames from "classnames";
import styles from "./MyInput.module.css";

const MyInput = ({ className, ...props }) => {
  return <input className={classnames(styles.myInput, className)} {...props} />;
};

export default MyInput;
