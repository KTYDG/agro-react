import axios from "axios";

export default class AccountService {
  static async login(username, password, setIsAuth, setError) {
    if (!Boolean(username) || !Boolean(password)) {
      setError("Заполните поля");
      return;
    }
    await axios
      .post("/login", `username=${username}&password=${password}`, {
        headers: {
          accept: "text/html",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        if (response.data === "ya") {
          setIsAuth(true);
          localStorage.setItem("auth", true);
          setError(undefined);
        } else setError("Неверный логин или пароль");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  static async logout(setIsAuth) {
    await axios.get("/logout");
    setIsAuth(false);
    localStorage.removeItem("auth");
  }
}
