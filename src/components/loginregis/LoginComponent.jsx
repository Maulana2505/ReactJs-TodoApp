import "../../css/loginregis/loginregis.css";
import { useState } from "react";
import AuthHoks from "../../hooks/loginregis/AuthHoks";

export default function LoginComponent() {
  const [action, setaction] = useState("");
  const [inputregis, setInputregis] = useState({
    username: "",
    password: "",
  });

  const [inputlogin, setInputLogin] = useState({
    username: "",
    password: "",
  });
  const regislink = () => {
    setaction(" active");
  };

  const {regis, login} = AuthHoks();

  const handlesubmitLogin = async (e) => {
    e.preventDefault();
    await login(inputlogin)
    setaction("");
  };

  const handlesubmitRegis = async (e) => {
    e.preventDefault();
    await regis(inputregis);
    setaction("");
  };
  return (
    <>
      <div className={`wrapper${action}`}>
        <div className="form">
          <form action="">
            <h1 className="title">Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={inputlogin.username}
                onChange={(e) =>
                  setInputLogin({ ...inputlogin, username: e.target.value })
                }
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="password"
                value={inputlogin.password}
                onChange={(e) =>
                  setInputLogin({ ...inputlogin, password: e.target.value })
                }
              />
            </div>
            <div className="buttons">
              <button type="button" onClick={handlesubmitLogin}>Login</button>
            </div>
            <h4>
              Dont Have Account?{" "}
              <a href="#" onClick={regislink}>
                Regis
              </a>
            </h4>
          </form>
        </div>

        <div className="form-register">
          <form action="">
            <h1 className="title">Regis</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                value={inputregis.username}
                onChange={(e) =>
                  setInputregis({ ...inputregis, username: e.target.value })
                }
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="password"
                value={inputregis.password}
                onChange={(e) =>
                  setInputregis({ ...inputregis, password: e.target.value })
                }
              />
            </div>
            <div className="buttons">
              <button type="button" onClick={handlesubmitRegis}>
                Regis
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
