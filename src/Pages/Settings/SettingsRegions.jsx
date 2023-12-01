import React, { useState } from "react";
import MainWindow from "../../components/UI/MainWindow/MainWindow";
import SettingsMenu from "../../components/UI/SettingsMenu/SettingsMenu";
import CWList from "../../components/UI/ColumnWindow/CWList/CWList";

const SettingsRegions = () => {
  const [regions, setRegions] = useState([
    "Ростовская область",
    "Краснодарский край",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
    "Брянская область",
  ]);

  const addRegion = (value) => {
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
      />
    </MainWindow>
  );
};

export default SettingsRegions;
