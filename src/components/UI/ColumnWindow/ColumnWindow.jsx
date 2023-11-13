import React from "react";
import styles from "./ColumnWindow.module.css";

const ColumnWindow = ({ children, ...props }) => {
  return (
    <div className={styles.window} {...props}>
      {children}
    </div>
  );
};

export default ColumnWindow;
