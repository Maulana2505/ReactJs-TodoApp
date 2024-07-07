import axios from "axios";
import { useAuthContext } from "../../context/loginregis/authcontext";
import { useEffect, useState } from "react";

const TodoHoks = () => {
  const { authUser } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo();
  }, []);
  const getTodo = async () => {
    await axios
      .get(
        `https://656c2171e1e03bfd572e02a7.mockapi.io/todo?userid=${authUser.id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        if (data.status == 200) {
          setTodo(data.data);
          setLoading(true);
        }
      })
      .catch((e) => {
        console.log(e);
        setError("Data empty");
      });
  };
  const AddTodo = async (title) => {
    const user = {
      userid: authUser.id,
      title: title,
    };
    await axios
      .post(`https://656c2171e1e03bfd572e02a7.mockapi.io/todo`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((data) => {
        const datas = data.data;
        if (data.status == 200 || data.status == 201) {
          console.log(datas);
          setTodo([...todo, datas]);
        }
      })
      .catch((e) => console.log(e));
  };
  
  const update = async (id, isDone) => {
    await axios
      .put(
        `https://656c2171e1e03bfd572e02a7.mockapi.io/todo/${id}`,
        { isDone: isDone },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        if (data.status == 200 || data.status == 201) {
          setTodo((items) =>
            items.map((e) => (e.id === id ? { ...e, isDone: !e.isDone } : e))
          );
        }
      });
  };

  const deletetodo = async (id) => {
    await axios
      .delete(`https://656c2171e1e03bfd572e02a7.mockapi.io/todo/${id}`)
      .then((data) => {
        if (data.status == 200 || data.status == 201) {
          console.log("berjsil");
          setTodo((item) => item.filter((i) => i.id !== id));
        }
      })
      .catch((e) => console.log(e));
  };
  return { loading, AddTodo, error, todo, setTodo, deletetodo, update };
};

export default TodoHoks;
