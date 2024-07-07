import axios from "axios";
import { useAuthContext } from "../../context/loginregis/authcontext";

const AuthHoks = () => {
  const { setAuthUser } = useAuthContext();
  const regis = async ({ username, password }) => {
    const user = {
      username: username,
      password: password,
    };
    await axios
      .post("https://656c2171e1e03bfd572e02a7.mockapi.io/user?", user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        if (data.status == 200) {
          console.log(data.data);
        }
      })
      .catch((e) => console.log(e));
  };
  const login = async ({ username, password }) => {
    const user = {
      username: username,
      password: password,
    };
    await axios
      .get(
        `https://656c2171e1e03bfd572e02a7.mockapi.io/user?username=${user.username}&password=${user.password}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        if (data.status == 200) {
          localStorage.setItem("user", JSON.stringify(data.data[0]));
          setAuthUser(data.data[0]);
        }
      })
      .catch((e) => console.log(e));
  };
  const logout = () => {
    localStorage.removeItem("user");
    setAuthUser(null);
    console.log("Berhasil Logout");
  };
  return { regis, login, logout };
};

export default AuthHoks;
