import React from "react";
import styles from "./Finances.module.css";
import MainWindow from "../../components/UI/MainWindow/MainWindow";
import WideWindow from "../../components/UI/WideWindow/WideWindow";
import MyButton from "../../components/UI/MyButton/MyButton";
import MyTable from "../../components/UI/MyTable/MyTable";
import TableHeader from "../../components/UI/MyTable/TableHeader/TableHeader";
import TableInput from "../../components/UI/MyTable/TableInput/TableInput";
import Pagination from "components/UI/Pagination/Pagination";
import { usePagination } from "hooks/usePagination";

const Finances = () => {
  const [page, nextPage, lastPage, limit, newLimit] = usePagination();

  return (
    <MainWindow>
      <WideWindow className={styles.wideWindow}>
        <MyButton className={styles.myButton}>Выгрузить данные (xls)</MyButton>
        <MyTable>
          <thead>
            <tr>
              <TableInput placeholder="Пользователь" />
              <TableHeader>Дата</TableHeader>
              <TableHeader>Пополнение, ₽</TableHeader>
              <TableHeader>Расход, ₽</TableHeader>
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

export default Finances;
