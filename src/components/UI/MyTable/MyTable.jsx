import React from "react";
import styles from "./MyTable.module.css";

const MyTable = ({ children }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.myTable}>{children}</table>
    </div>
  );
};

export default MyTable;
