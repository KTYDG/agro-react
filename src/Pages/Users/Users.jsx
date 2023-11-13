import React from "react";
import styles from "./Users.module.css";
import MainWindow from "../../components/UI/MainWindow/MainWindow";
import WideWindow from "../../components/UI/WideWindow/WideWindow";
import MyTable from "../../components/UI/MyTable/MyTable";
import TableHeader from "../../components/UI/TableHeader/TableHeader";
import TableInput from "../../components/UI/TableInput/TableInput";

const Users = () => {
  return (
    <MainWindow>
      <WideWindow className={styles.wideWindow}>
        <MyTable>
          <thead className={styles.topMargin}>
            <tr>
              <TableInput placeholder="Пользователь" />
              <TableHeader>Подписки</TableHeader>
              <TableHeader>Зап. на покупку</TableHeader>
              <TableHeader>Зап. на продажу</TableHeader>
              <TableHeader>Баланс, ₽</TableHeader>
            </tr>
          </thead>
          <tbody></tbody>
        </MyTable>
      </WideWindow>
    </MainWindow>
  );
};

export default Users;
