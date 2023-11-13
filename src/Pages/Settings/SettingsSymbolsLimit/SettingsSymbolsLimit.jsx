import React, { useState } from "react";
import SettingsMenu from "../../../components/UI/SettingsMenu/SettingsMenu";
import MainWindow from "../../../components/UI/MainWindow/MainWindow";
import MyForm from "../../../components/UI/MyForm/MyForm";
import MyInput from "../../../components/UI/MyInput/MyInput";
import MyButton from "../../../components/UI/MyButton/MyButton";
import styles from "./SettingsSymbolsLimit.module.css";

const SettingsCost = () => {
  const [limit, setLimit] = useState(null);
  const postTariff = () => {};
  return (
    <MainWindow>
      <SettingsMenu />
      <MyForm className={styles.formWidth} onSubmit={postTariff}>
        <h3 className={styles.headerMargin}>
          Максимальное кол-во символов в запросе
        </h3>
        <MyInput
          className={styles.inputWidth}
          type="text"
          onChange={(e) => setLimit(e.target.value)}
        />
        <MyButton>Сохранить</MyButton>
      </MyForm>
    </MainWindow>
  );
};

export default SettingsCost;
