import React from "react";
import styles from "./Subscriptions.module.css";
import MainWindow from "../../components/UI/MainWindow/MainWindow";
import MyButton from "../../components/UI/MyButton/MyButton";
import MyTable from "../../components/UI/MyTable/MyTable";
import TableHeader from "../../components/UI/MyTable/TableHeader/TableHeader";
import TableSelector from "../../components/UI/MyTable/TableSelector/TableSelector";
import WideWindow from "../../components/UI/WideWindow/WideWindow";
import TableInput from "../../components/UI/MyTable/TableInput/TableInput";
import Pagination from "components/UI/Pagination/Pagination";
import { usePagination } from "hooks/usePagination";

const Subscriptions = () => {
  const { page, nextPage, lastPage, limit, newLimit } = usePagination();

  return (
    <MainWindow>
      <WideWindow>
        <MyButton className={styles.myButton}>Выгрузить данные (xls)</MyButton>
        <MyTable>
          <thead>
            <tr>
              <TableInput placeholder="Пользователь" />
              <TableInput placeholder="ID подписи" />
              <TableSelector name="Статус">
                <option>Активна</option>
                <option>Истекла</option>
              </TableSelector>
              <TableSelector name="Категория"></TableSelector>
              <TableHeader>Продукт</TableHeader>
              <TableSelector name="Регион"></TableSelector>
              <TableHeader>Начало</TableHeader>
              <TableHeader>Конец</TableHeader>
              <TableHeader>Стоимость, ₽</TableHeader>
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

export default Subscriptions;
