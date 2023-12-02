import React, { useState } from "react";
import styles from "./CWAddElem.module.css";
import MyInput from "../../MyInput/MyInput";
import MyButton from "../../MyButton/MyButton";

const CWAddElem = ({ placeholder, onClick }) => {
  const [item, setItem] = useState("");
  const [border, setBorder] = useState("2px solid white");

  const onChange = (e) => {
    setBorder("2px solid white");
    setItem(e.target.value);
  };

  const handleAdd = () => {
    if (!item) {
      setBorder("2px solid red");
      return;
    }
    onClick(item);
    setItem("");
  };

  return (
    <div className={styles.window}>
      <hr className={styles.rMargin} />
      <MyInput
        placeholder={placeholder}
        style={{ border: border }}
        value={item}
        onChange={onChange}
      />
      <MyButton onClick={handleAdd}>Добавить</MyButton>
    </div>
  );
};

export default CWAddElem;
