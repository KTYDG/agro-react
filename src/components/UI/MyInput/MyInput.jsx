import React from "react";
import styles from "./MyInput.module.css";

const MyInput = ({ className, ...props }) => {
  return <input className={[styles.myInput, className].join(" ")} {...props} />;
};

export default MyInput;
