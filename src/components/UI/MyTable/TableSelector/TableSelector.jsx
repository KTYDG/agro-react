import React from "react";
import styles from "./TableSelector.module.css";

const TableSelector = ({ children, name, ...props }) => {
  return (
    <th>
      <select className={styles.tSelector} {...props}>
        <option value="">{name}</option>
        {children}
      </select>
    </th>
  );
};

export default TableSelector;
