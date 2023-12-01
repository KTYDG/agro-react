import axios from "axios";

export default class SettingsService {
  static async login(username, password, setIsAuth) {
    await axios
      .post("/login", `username=${username}&password=${password}`, {
        headers: {
          accept: "text/html",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data === "ya") {
          setIsAuth(true);
          localStorage.setItem("auth", true);
        }
      })
      .catch(() => {
        // console.error("Error:", error);
      });
  }
  static async logout(setIsAuth) {
    await axios.get("/logout");
    setIsAuth(false);
    localStorage.removeItem("auth");
  }
}
