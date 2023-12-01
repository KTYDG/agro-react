import React from "react";
import classnames from "classnames";
import styles from "./WideWindow.module.css";

const WideWindow = ({ className, children, ...props }) => {
  return (
    <div className={classnames(styles.wideWindow, className)}>{children}</div>
  );
};

export default WideWindow;
