import React from "react";
import styles from "./MainWindow.module.css";

const MainWindow = ({ className, children, ...props }) => {
  return (
    <div className={[styles.window, className].join(" ")} {...props}>
      {children}
    </div>
  );
};

export default MainWindow;
