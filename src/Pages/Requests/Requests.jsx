import React from "react";
import styles from "./Request.module.css";
import st2 from "./button.module.css";
import MainWindow from "../../components/UI/MainWindow/MainWindow";
import WideWindow from "../../components/UI/WideWindow/WideWindow";
import MyButton from "../../components/UI/MyButton/MyButton";
import MyTable from "../../components/UI/MyTable/MyTable";
import TableHeader from "../../components/UI/MyTable/TableHeader/TableHeader";
import TableInput from "../../components/UI/MyTable/TableInput/TableInput";
import TableSelector from "components/UI/MyTable/TableSelector/TableSelector";
import Pagination from "components/UI/Pagination/Pagination";
import { usePagination } from "hooks/usePagination";

const Requests = () => {
  const { page, nextPage, lastPage, limit, newLimit } = usePagination();

  return (
    <MainWindow>
      <WideWindow>
        <div className={styles.buttons}>
          <MyButton className={styles.myButton}>
            Загрузить запросы (xls)
          </MyButton>
          <MyButton className={st2.myButton}>Выгрузить запросы (xls)</MyButton>
        </div>
        <MyTable>
          <thead>
            <tr>
              <TableInput placeholder="Пользователь" />
              <TableHeader>Направление</TableHeader>
              <TableInput placeholder="ID запроса" />
              <TableSelector name="Статус">
                <option>Активен</option>
                <option>Истек</option>
                <option>Деактивирован</option>
              </TableSelector>
              <TableInput placeholder="Телефон" />
              <TableSelector name="Категория"></TableSelector>
              <TableHeader>Продукт</TableHeader>
              <TableSelector name="Регион"></TableSelector>
              <TableHeader>Текст</TableHeader>
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

export default Requests;
