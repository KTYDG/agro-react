import React, { useState } from "react";
import SettingsMenu from "../../../components/UI/SettingsMenu/SettingsMenu";
import MainWindow from "../../../components/UI/MainWindow/MainWindow";
import MyForm from "../../../components/UI/MyForm/MyForm";
import MyInput from "../../../components/UI/MyInput/MyInput";
import MyButton from "../../../components/UI/MyButton/MyButton";
import styles from "./SettingsCost.module.css";
import SettingsService from "API/SettingsService";

const SettingsCost = () => {
  const [params, setParams] = useState({
    request: "",
    subscription: "",
  });

  const postTariff = (e) => {
    e.preventDefault();
    if (params.request && !isNaN(params.request)) {
      SettingsService.postCost(params.request);
    }
    if (params.subscription && !isNaN(params.subscription)) {
      SettingsService.postCostSub(params.subscription);
    }
  };

  return (
    <MainWindow>
      <SettingsMenu />
      <MyForm className={styles.formWidth} onSubmit={postTariff}>
        <h3 className={styles.headerMargin}>Стоимость запроса</h3>
        <MyInput
          className={styles.inputWidth}
          type="text"
          onChange={(e) => setParams({ ...params, request: e.target.value })}
        />
        <h3 className={styles.headerMargin}>Стоимость подписки</h3>
        <MyInput
          className={styles.inputWidth}
          type="text"
          onChange={(e) =>
            setParams({ ...params, subscription: e.target.value })
          }
        />
        <MyButton>Сохранить</MyButton>
      </MyForm>
    </MainWindow>
  );
};

export default SettingsCost;
