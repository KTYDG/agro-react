import Users from "../Pages/Users/Users";
import Subscriptions from "../Pages/Subscriptions/Subscriptions";
import Requests from "../Pages/Requests/Requests";
import Finances from "../Pages/Finances/Finances";
import Settings from "../Pages/Settings/Settings";
import Login from "../Pages/Login/Login";
import { Navigate } from "react-router-dom";
import SettingsImage from "../Pages/Settings/SettingsImage/SettingsImage";
import SettingsCost from "../Pages/Settings/SettingsCost/SettingsCost";
import SettingsSymbolsLimit from "../Pages/Settings/SettingsSymbolsLimit/SettingsSymbolsLimit";
import SettingsRegions from "../Pages/Settings/SettingsRegions";
import SettingsCategories from "../Pages/Settings/SettingsCategories";

export const privateRoutes = [
  { path: "/users", element: <Users /> },
  { path: "/subscriptions", element: <Subscriptions /> },
  { path: "/requests", element: <Requests /> },
  { path: "/finances", element: <Finances /> },
  { path: "/settings", element: <Settings /> },
  { path: "/settings/start-img", element: <SettingsImage /> },
  { path: "/settings/cost", element: <SettingsCost /> },
  { path: "/settings/categories", element: <SettingsCategories /> },
  { path: "/settings/regions", element: <SettingsRegions /> },
  { path: "/settings/symbols-limit", element: <SettingsSymbolsLimit /> },

  { path: "*", element: <Navigate to="/users" /> },
];

export const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "*", element: <Navigate to="/login" /> },
];
