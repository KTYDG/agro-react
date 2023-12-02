import React, { useEffect, useState } from "react";
import MainWindow from "../../components/UI/MainWindow/MainWindow";
import SettingsMenu from "../../components/UI/SettingsMenu/SettingsMenu";
import CWList from "../../components/UI/ColumnWindow/CWList/CWList";
import SettingsService from "API/SettingsService";
import { useFetching } from "hooks/useFetching";
import Loader from "components/UI/Loader/Loader";

const SettingsCategories = () => {
  const [currentCat, setCurrentCat] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [fetchingCategories, isCategoriesLoading, errorCategories] =
    useFetching(async () => {
      const response = await SettingsService.getCategories();
      setCategories(Object.keys(response.data));
    });

  const [fetchingProducts, isProductsLoading, errorProducts] = useFetching(
    async () => {
      const response = await SettingsService.getProducts(currentCat);
      setProducts(Object.keys(response.data));
    }
  );

  useEffect(() => {
    fetchingCategories();
  }, []);

  useEffect(() => {
    fetchingProducts();
  }, [currentCat]);

  const addCategory = async (value) => {
    await SettingsService.addCategory(value);
    setCategories([...categories, value]);
  };

  const removeCategory = async (category) => {
    await SettingsService.deleteCategory(category);
    setCategories(categories.filter((r) => r !== category));
  };

  const addProduct = async (value) => {
    await SettingsService.addProduct(currentCat, value);
    setProducts([...products, value]);
  };

  const removeProduct = async (product) => {
    await SettingsService.deleteProduct(currentCat, product);
    setProducts(products.filter((r) => r !== product));
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
      >
        {errorCategories && <h1>Произошла ошибка: {errorCategories}</h1>}
        {isCategoriesLoading && <Loader />}
      </CWList>
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
        >
          {errorProducts && <h1>Произошла ошибка: {errorProducts}</h1>}
          {isProductsLoading && <Loader />}
        </CWList>
      )}
    </MainWindow>
  );
};

export default SettingsCategories;
