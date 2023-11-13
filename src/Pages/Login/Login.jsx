import React, { useContext } from "react";
import { Context } from "../../context/context";
import styles from "./Login.module.css";
import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";
import MyForm from "../../components/UI/MyForm/MyForm";

const Login = () => {
  const { setIsAuth } = useContext(Context);
  const login = (event) => {
    event.preventDefault();
    // Тут добавить код для авторизации !!!
    setIsAuth(true);
    localStorage.setItem("auth", true);
  };

  return (
    <MyForm className={styles.login}>
      <MyInput className={styles.customInput} type="text" placeholder="Логин" />
      <MyInput
        className={styles.customInput}
        type="password"
        placeholder="Пароль"
      />
      <MyButton onClick={login}>Вход</MyButton>
    </MyForm>
  );
};

export default Login;
