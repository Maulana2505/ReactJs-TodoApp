import { useState } from "react";
import TodoHoks from "../../hooks/todo/todoHoks";

export default function TodoList() {
  const { AddTodo, todo, loading, deletetodo, update } = TodoHoks();
  const [title, setTitle] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    await AddTodo(title);
    setTitle("");
  };
  const handleDelete = async (id) => {
    await deletetodo(id);
  };
  const handleCheck = async (id, isdone) => {
    await update(id, isdone);
  };
  return (
    <div className="todo-container">
      <h1>Todo</h1>
      <div className="inputbutton-container">
        <input
          className="inputs"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handlesubmit}>Add</button>
      </div>
      <div className="list-container">
        {loading ? (
          <div>
            {todo.map((e) => {
              return (
                <div className="list-data" key={e.id}>
                  <div className="list-data-children">
                    <input
                      type="checkbox"
                      name="done"
                      value={e.isDone}
                      checked={e.isDone}
                      onChange={() => handleCheck(e.id, !e.isDone)}
                    />
                    <p>{e.title}</p>
                  </div>
                  <button
                    className="buttons"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <h1>Loading ... </h1>
        )}
      </div>
    </div>
  );
}
