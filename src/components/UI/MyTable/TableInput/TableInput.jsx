import React from "react";
import styles from "./TableInput.module.css";

const TableInput = (props) => {
  return (
    <th>
      <input className={styles.tableInput} {...props} />
    </th>
  );
};

export default TableInput;
