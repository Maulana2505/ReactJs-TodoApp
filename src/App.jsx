import { useAuthContext } from "./context/loginregis/authcontext";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginRegis from "./page/loginregis/loginregis";
import Todo from "./page/todo/todo";

export default function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={authUser? <Navigate to="/todo" /> : <LoginRegis />}
        />
        <Route
          path="/todo"
          element={authUser ? <Todo /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}
