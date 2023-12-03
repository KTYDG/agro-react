import React, { useEffect, useState } from "react";
import styles from "./SettingsImage.module.css";
import camera from "../../../images/camera.png";
import SettingsMenu from "../../../components/UI/SettingsMenu/SettingsMenu";
import MainWindow from "../../../components/UI/MainWindow/MainWindow";
import MyInput from "../../../components/UI/MyInput/MyInput";
import MyForm from "../../../components/UI/MyForm/MyForm";
import CrossButton from "../../../components/UI/CrossButton/CrossButton";
import SettingsService from "API/SettingsService";
import { useFetching } from "hooks/useFetching";
import Loader from "components/UI/Loader/Loader";

const SettingsImage = () => {
  const [img, setImg] = useState(null);

  const [fetching, isLoading, error] = useFetching(async () => {
    const url = await SettingsService.getImage();
    setImg(url);
  });

  useEffect(() => {
    fetching();
  }, [fetching]);

  const postImg = async (e) => {
    // const url = URL.createObjectURL(e.target.files[0]);
    await SettingsService.postImage(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  };

  const deleteImg = async () => {
    await SettingsService.deleteImage();
    setImg(null);
  };

  return (
    <MainWindow>
      <SettingsMenu />
      <MyForm className={styles.myForm}>
        <h3 className={styles.headerMargin}>Иллюстрация при входе в бот</h3>
        {error && <h2>Произошла ошибка: {error}</h2>}
        {isLoading ? (
          <Loader />
        ) : Boolean(img) ? (
          <div className={styles.preview}>
            <img className={styles.imgSize} alt="Выбранное изоб." src={img} />
            <CrossButton className={styles.crossButton} onClick={deleteImg} />
          </div>
        ) : (
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
              onChange={postImg}
            />
          </label>
        )}
      </MyForm>
    </MainWindow>
  );
};

export default SettingsImage;
