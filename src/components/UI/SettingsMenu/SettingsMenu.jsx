import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ColumnWindow from "../ColumnWindow/ColumnWindow";
import CWRowBtn from "../ColumnWindow/CWRowBtn/CWRowBtn";

const SettingsMenu = () => {
  const route = useNavigate();
  const buttons = [
    { children: "Изображение на старте", to: "/settings/start-img" },
    { children: "Стоимость", to: "/settings/cost" },
    { children: "Категории и продукты", to: "/settings/categories" },
    { children: "Регионы", to: "/settings/regions" },
    { children: "Кол-во Символов", to: "/settings/symbols-limit" },
  ];

  const current = useLocation().pathname;

  return (
    <ColumnWindow>
      {buttons.map((button, index) => (
        <CWRowBtn
          key={index}
          to={button.to}
          onClick={() =>
            current === button.to ? route("/settings") : route(button.to)
          }
        >
          {button.children}
        </CWRowBtn>
      ))}
    </ColumnWindow>
  );
};

export default SettingsMenu;
