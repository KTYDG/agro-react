import React from "react";
import classnames from "classnames";
import styles from "./MyTable.module.css";

const MyTable = ({ className, children }) => {
  return (
    <div className={classnames(styles.tableContainer, className)}>
      <table className={styles.myTable}>{children}</table>
    </div>
  );
};

export default MyTable;
