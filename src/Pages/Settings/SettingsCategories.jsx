import React, { useState } from "react";
import MainWindow from "../../components/UI/MainWindow/MainWindow";
import SettingsMenu from "../../components/UI/SettingsMenu/SettingsMenu";
import CWList from "../../components/UI/ColumnWindow/CWList/CWList";

const SettingsCategories = () => {
  const [currentCat, setCurrentCat] = useState(null);
  const [categories, setCategories] = useState([
    "Зерновые культуры",
    "Масличные культуры",
    "Технические культуры",
    "Продукты переработки",
  ]);
  const [products, setProducts] = useState([
    "Пшеница",
    "Кукуруза",
    "Гречка",
    "Просо",
  ]);

  const addCategory = (e, value) => {
    setCategories([...categories, value]);

    // Добавить код на отправку региона
  };  

  const removeCategory = (category) => {
    setCategories(categories.filter((r) => r !== category));

    // Добавить код на удаление региона
  };
  
  const addProduct = (e, value) => {
    setProducts([...products, value]);

    // Добавить код на отправку региона
  };

  const removeProduct = (product) => {
    setProducts(products.filter((r) => r !== product));

    // Добавить код на удаление региона
  };

  return (
    <MainWindow>
      <SettingsMenu />
      <CWList
        header="Категории"
        list={{
          items: categories,
          add: addCategory,
          remove: removeCategory,
        }}
        current={{ item: currentCat, set: setCurrentCat }}
        placeholder="Новая категория"
      />
      {Boolean(currentCat) && (
        <CWList
          header="Продукты"
          list={{
            items: products,
            add: addProduct,
            remove: removeProduct,
          }}
          current={{ item: "", set: () => {} }}
          placeholder="Новый продукт"
        />
      )}
    </MainWindow>
  );
};

export default SettingsCategories;
