import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { Context } from "./context/context";
import Navbar from "./components/UI/Navbar/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) setIsAuth(true);
    setIsLoading(false);
  }, []);

  return (
    <Context.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        {isAuth && <Navbar />}
        <AppRouter />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
