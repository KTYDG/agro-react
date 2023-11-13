import React, { useState } from "react";
import styles from "./SettingsImage.module.css";
import camera from "../../../images/camera.png";
import SettingsMenu from "../../../components/UI/SettingsMenu/SettingsMenu";
import MainWindow from "../../../components/UI/MainWindow/MainWindow";
import MyInput from "../../../components/UI/MyInput/MyInput";
import MyForm from "../../../components/UI/MyForm/MyForm";
import CrossButton from "../../../components/UI/CrossButton/CrossButton";

const SettingsImage = () => {
  const [img, setImg] = useState(null);
  return (
    <MainWindow>
      <SettingsMenu />
      <MyForm className={styles.myForm}>
        <h3 className={styles.headerMargin}>Иллюстрация при входе в бот</h3>
        {img == null ? (
          <label className={styles.labelInp}>
            <p className={[styles.textSize, styles.botMarg].join(" ")}>
              Перетащите jpg или png
            </p>
            <img
              className={[styles.botMarg, styles.imgInpSize].join(" ")}
              alt=""
              src={camera}
            ></img>
            <MyInput
              className={styles.myInput}
              type="file"
              accept="image/*"
              onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
            />
          </label>
        ) : (
          <div className={styles.preview}>
            <img className={styles.imgSize} alt="Выбранное изоб." src={img} />
            <CrossButton
              className={styles.crossButton}
              onClick={() => setImg(null)}
            />
          </div>
        )}
      </MyForm>
    </MainWindow>
  );
};

export default SettingsImage;
