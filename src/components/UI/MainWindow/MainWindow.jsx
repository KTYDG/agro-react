import React from "react";
import classnames from "classnames";
import styles from "./MainWindow.module.css";

const MainWindow = ({ className, children, ...props }) => {
  return (
    <div className={classnames(styles.window, className)} {...props}>
      {children}
    </div>
  );
};

export default MainWindow;
