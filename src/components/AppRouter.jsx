import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router/router";
import { Context } from "../context/context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(Context);

  if (isLoading) return <Loader />;

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))
        : publicRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
    </Routes>
  );
};

export default AppRouter;
