import React from "react";
import styles from "./WideWindow.module.css";

const WideWindow = ({ className, children, ...props }) => {
  return (
    <div className={[styles.wideWindow, className].join(" ")}>{children}</div>
  );
};

export default WideWindow;
