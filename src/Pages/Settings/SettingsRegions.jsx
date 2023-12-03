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
  }, [fetching]);

  const addRegion = async (value) => {
    const response = await SettingsService.addRegion(value);
    if (response.data.success)
      setRegions([...regions, { item: value, id: response.data.id }]);
  };

  const removeRegion = async (region) => {
    const response = await SettingsService.deleteRegion(region);
    if (response.data.success)
      setRegions(regions.filter((r) => r.region_name !== region));
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
