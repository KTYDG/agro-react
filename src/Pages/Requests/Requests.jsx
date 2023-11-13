import React from "react";
import styles from "./Request.module.css";
import st2 from "./button.module.css";
import MainWindow from "../../components/UI/MainWindow/MainWindow";
import WideWindow from "../../components/UI/WideWindow/WideWindow";
import MyButton from "../../components/UI/MyButton/MyButton";
import MyTable from "../../components/UI/MyTable/MyTable";
import TableHeader from "../../components/UI/TableHeader/TableHeader";
import TableInput from "../../components/UI/TableInput/TableInput";

const Requests = () => {
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
              <TableHeader>Статус</TableHeader>
              <TableInput placeholder="Телефон" />
              <TableHeader>Категория</TableHeader>
              <TableHeader>Продукт</TableHeader>
              <TableHeader>Регион</TableHeader>
              <TableHeader>Текст</TableHeader>
              <TableHeader>Начало</TableHeader>
              <TableHeader>Конец</TableHeader>
              <TableHeader>Стоимость, ₽</TableHeader>
            </tr>
          </thead>
          <tbody></tbody>
        </MyTable>
      </WideWindow>
    </MainWindow>
  );
};

export default Requests;
