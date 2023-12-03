import React, { useState } from "react";
import styles from "./CWTableRow.module.css";
import CWRowBtn from "../CWRowBtn/CWRowBtn";
import CrossButton from "../../CrossButton/CrossButton";

const CWTableRow = ({ item, index, remove, current }) => {
  const [delBtn, setDelBtn] = useState(false);

  return (
    <tr
      onMouseEnter={() => setDelBtn(true)}
      onMouseLeave={() => setDelBtn(false)}
    >
      <td>
        <p className={styles.itemIndex}>{index + 1}</p>
      </td>
      <td className={styles.line}>
        <CWRowBtn
          current={current.item}
          className={styles.colButton}
          onClick={() => current.set(item === current.item ? "" : item)}
        >
          {item}
        </CWRowBtn>
        {delBtn && (
          <CrossButton
            className={styles.crossButton}
            onClick={() => remove(item)}
          />
        )}
      </td>
    </tr>
  );
};

export default CWTableRow;
