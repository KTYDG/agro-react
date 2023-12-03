import React, { useState } from "react";
import SettingsMenu from "../../../components/UI/SettingsMenu/SettingsMenu";
import MainWindow from "../../../components/UI/MainWindow/MainWindow";
import MyForm from "../../../components/UI/MyForm/MyForm";
import MyInput from "../../../components/UI/MyInput/MyInput";
import MyButton from "../../../components/UI/MyButton/MyButton";
import styles from "./SettingsSymbolsLimit.module.css";
import SettingsService from "API/SettingsService";

const SettingsCost = () => {
  const [limit, setLimit] = useState("");
  const [border, setBorder] = useState("2px solid white");

  const onChange = (e) => {
    setBorder("2px solid white");
    setLimit(e.target.value);
  };

  const postLimit = (e) => {
    e.preventDefault();
    if (!limit || isNaN(limit)) {
      setBorder("2px solid red");
      return;
    }
    SettingsService.setCharLimit(limit);
  };
  return (
    <MainWindow>
      <SettingsMenu />
      <MyForm className={styles.formWidth} onSubmit={postLimit}>
        <h3 className={styles.headerMargin}>
          Максимальное кол-во символов в запросе
        </h3>
        <MyInput
          className={styles.inputWidth}
          style={{ border: border }}
          type="text"
          value={limit}
          onChange={onChange}
        />
        <MyButton type="submit">Сохранить</MyButton>
      </MyForm>
    </MainWindow>
  );
};

export default SettingsCost;
