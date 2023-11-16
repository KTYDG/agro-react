import React, { useState } from "react";
import styles from "./Users.module.css";
import MainWindow from "../../components/UI/MainWindow/MainWindow";
import WideWindow from "../../components/UI/WideWindow/WideWindow";
import MyTable from "../../components/UI/MyTable/MyTable";
import TableHeader from "../../components/UI/MyTable/TableHeader/TableHeader";
import TableInput from "../../components/UI/MyTable/TableInput/TableInput";
import MyModal from "../../components/UI/MyModal/MyModal";
import Pagination from "components/UI/Pagination/Pagination";
import { usePagination } from "hooks/usePagination";

const Users = () => {
  const [card, setCard] = useState(false);
  const { page, nextPage, lastPage, limit, newLimit } = usePagination();

  return (
    <MainWindow>
      <WideWindow className={styles.wideWindow}>
        <MyModal visible={card} setVisible={setCard}></MyModal>
        <MyTable className={styles.tableContainer}>
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
        <Pagination
          totalItems="200"
          pagination={{ page: page, limit: limit }}
          set={{ nextPage: nextPage, lastPage: lastPage, limit: newLimit }}
        />
      </WideWindow>
    </MainWindow>
  );
};

export default Users;
