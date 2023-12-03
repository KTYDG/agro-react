import React from "react";
import classnames from "classnames";
import styles from "./CWList.module.css";
import ColumnWindow from "../ColumnWindow";
import CWTableRow from "../CWTableRow/CWTableRow";
import CWAddElem from "../CWAddElem/CWAddElem";

const CWList = ({ children, header, list, current, placeholder }) => {
  return (
    <ColumnWindow>
      <h3 className={classnames(styles.headText, styles.stick)}>{header}</h3>
      {children}

      <div className={styles.tableScroll}>
        <table style={{ width: "100%" }}>
          <tbody>
            {list.items.map((value, index) => (
              <CWTableRow
                key={value.id || value.region_number}
                item={value.item || value.region_name}
                index={index}
                remove={list.remove}
                current={current}
              />
            ))}
          </tbody>
        </table>
      </div>
      <CWAddElem placeholder={placeholder} onClick={list.add} />
    </ColumnWindow>
  );
};

export default CWList;
