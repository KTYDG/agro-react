import React, { useEffect, useState } from "react";
import MainWindow from "../../components/UI/MainWindow/MainWindow";
import SettingsMenu from "../../components/UI/SettingsMenu/SettingsMenu";
import CWList from "../../components/UI/ColumnWindow/CWList/CWList";
import { useFetching } from "hooks/useFetching";
import SettingsService from "API/SettingsService";
import Loader from "components/UI/Loader/Loader";

const SettingsRegions = () => {
  const [regions, setRegions] = useState([]);

  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await SettingsService.getRegions();
    setRegions(response.data);
  });

  useEffect(() => {
    fetching();
  }, []);

  const addRegion = (value) => {
    const response = SettingsService.addRegion(value);
    setRegions([...regions, value]);
    // Добавить код на отправку региона
  };

  const removeRegion = (region) => {
    setRegions(regions.filter((r) => r !== region));

    // Добавить код на удаление региона
  };

  return (
    <MainWindow>
      <SettingsMenu />
      <CWList
        header="Регионы"
        list={{ items: regions, add: addRegion, remove: removeRegion }}
        current={{ item: "", set: () => {} }}
        placeholder="Новый регион"
      >
        {error && <h1>Произошла ошибка: {error}</h1>}
        {isLoading && <Loader />}
      </CWList>
    </MainWindow>
  );
};

export default SettingsRegions;
