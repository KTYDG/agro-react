import React from "react";
import classnames from "classnames";
import styles from "./CWRowBtn.module.css";
import { useLocation } from "react-router-dom";

const CWRowBtn = ({ children, to, current, className, ...props }) => {
  const match = useLocation().pathname === to || current === children;
  const classes = classnames(styles.colButton, className);

  return (
    <button
      className={match ? classnames(classes, styles.active) : classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default CWRowBtn;
