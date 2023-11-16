import React from "react";
import styles from "./MyTable.module.css";

const MyTable = ({ className, children }) => {
  return (
    <div className={[styles.tableContainer, className].join(" ")}>
      <table className={styles.myTable}>{children}</table>
    </div>
  );
};

export default MyTable;
