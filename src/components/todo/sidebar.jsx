import { useAuthContext } from "../../context/loginregis/authcontext";
import AuthHoks from "../../hooks/loginregis/AuthHoks";

export default function Sidebar() {
  const { authUser } = useAuthContext();
  const { logout } = AuthHoks();
  const removelocaldata = () => {
    logout();
  };
  return (
    <>
      <div className="sidebar-container">
        <div className="ss">
          <img className="images" src={authUser.avatar} alt="" />
          <h5>{authUser.username}</h5>
        </div>
        <button className="buttons" onClick={removelocaldata}>
          Keluar
        </button>
      </div>
    </>
  );
}
