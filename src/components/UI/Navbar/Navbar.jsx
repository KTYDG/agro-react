import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import MyLink from "../MyLink/MyLink";
import { Context } from "../../../context/context";
import MyButton from "../MyButton/MyButton";

const Navbar = () => {
  const { setIsAuth } = useContext(Context);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__links}>
        <MyLink to="/users">Пользователи</MyLink>
        <MyLink to="/subscriptions">Подписки</MyLink>
        <MyLink to="/requests">Запросы</MyLink>
        <MyLink to="/finances">Финансы</MyLink>
      </div>
      <div className={styles.navbar__links}>
        <MyLink to="/settings">Настройки</MyLink>
        <MyButton className={styles.navbar__logout} onClick={logout}>Выйти</MyButton>
      </div>
    </div>
  );
};

export default Navbar;
