import React, { useContext, useState } from "react";
import { Context } from "../../context/context";
import styles from "./Login.module.css";
import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";
import MyForm from "../../components/UI/MyForm/MyForm";
import AccountService from "../../API/AccountService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const { setIsAuth } = useContext(Context);

  const login = async (e) => {
    e.preventDefault();
    AccountService.login(username, password, setIsAuth, setError);
  };

  return (
    <MyForm onSubmit={login} className={styles.login}>
      <MyInput
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        className={styles.customInput}
        type="text"
        placeholder="Логин"
      />
      <MyInput
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className={styles.customInput}
        type="password"
        placeholder="Пароль"
      />
      <div className={styles.row}>
        <MyButton type="submit">Вход</MyButton>
        <h1 className={styles.text}>{error}</h1>
      </div>
    </MyForm>
  );
};

export default Login;
