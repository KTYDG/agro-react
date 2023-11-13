import React from "react";
import styles from "./Subscriptions.module.css";
import MainWindow from "../../components/UI/MainWindow/MainWindow";
import MyButton from "../../components/UI/MyButton/MyButton";
import MyTable from "../../components/UI/MyTable/MyTable";
import TableHeader from "../../components/UI/TableHeader/TableHeader";
import WideWindow from "../../components/UI/WideWindow/WideWindow";
import TableInput from "../../components/UI/TableInput/TableInput";

const Subscriptions = () => {
  return (
    <MainWindow>
      <WideWindow>
        <MyButton className={styles.myButton}>Выгрузить данные (xls)</MyButton>
        <MyTable>
          <thead>
            <tr>
              <TableInput placeholder="Пользователь" />
              <TableInput placeholder="ID подписи" />
              <TableHeader>Статус</TableHeader>
              <TableHeader>Категория</TableHeader>
              <TableHeader>Продукт</TableHeader>
              <TableHeader>Регион</TableHeader>
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

export default Subscriptions;
