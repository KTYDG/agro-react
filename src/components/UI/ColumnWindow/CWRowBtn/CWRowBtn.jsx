import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./CWRowBtn.module.css";

const CWRowBtn = ({ children, to, current, className, ...props }) => {
  const match = useLocation().pathname === to || current === children;
  const classes = [styles.colButton, className].join(" ");

  return (
    <button
      className={match ? [classes, styles.active].join(" ") : classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default CWRowBtn;
