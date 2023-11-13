import React from "react";
import styles from "./CWList.module.css";
import ColumnWindow from "../ColumnWindow";
import CWTableRow from "../CWTableRow/CWTableRow";
import CWAddElem from "../CWAddElem/CWAddElem";

const CWList = ({ header, list, current, placeholder }) => {
  return (
    <ColumnWindow>
      <h3 className={[styles.headText, styles.stick].join(" ")}>{header}</h3>
      <div className={styles.tableScroll}>
        <table style={{ width: "100%" }}>
          <tbody>
            {list.items.map((item, index) => (
              <CWTableRow
                key={index}
                item={item}
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
