import React from "react";
import styles from "./TableHeader.module.css";

const TableHeader = ({ children }) => {
  return (
    <th>
      <div className={styles.tHeader}>{children}</div>
    </th>
  );
};

export default TableHeader;
