import React, { useEffect, useState } from "react";
import MainWindow from "../../components/UI/MainWindow/MainWindow";
import SettingsMenu from "../../components/UI/SettingsMenu/SettingsMenu";
import CWList from "../../components/UI/ColumnWindow/CWList/CWList";
import SettingsService from "API/SettingsService";
import { useFetching } from "hooks/useFetching";
import Loader from "components/UI/Loader/Loader";

const SettingsCategories = () => {
  const [currentCat, setCurrentCat] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [fetchingCategories, isCategoriesLoading, errorCategories] =
    useFetching(async () => {
      const response = await SettingsService.getCategories();
      setCategories(response.data);
    });

  const [fetchingProducts, isProductsLoading, errorProducts] = useFetching(
    async () => {
      const response = await SettingsService.getProducts(currentCat);
      setProducts(response.data);
    }
  );

  useEffect(() => {
    fetchingCategories();
  }, [fetchingCategories]);

  useEffect(() => {
    fetchingProducts();
  }, [fetchingProducts, currentCat]);

  const addCategory = async (value) => {
    const response = await SettingsService.addCategory(value);
    if (response.data.success)
      setCategories([...categories, { item: value, id: response.data.id }]);
  };

  const removeCategory = async (category) => {
    const response = await SettingsService.deleteCategory(category);
    if (response.data.success)
      setCategories(categories.filter((r) => r.item !== category));
  };

  const addProduct = async (value) => {
    const response = await SettingsService.addProduct(currentCat, value);
    if (response.data.success)
      setProducts([...products, { item: value, id: response.data.id }]);
  };

  const removeProduct = async (product) => {
    const response = await SettingsService.deleteProduct(currentCat, product);
    if (response.data.success)
      setProducts(products.filter((r) => r.item !== product));
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
