import "../../css/todo/todo.css";
import Sidebar from "../../components/todo/sidebar";
import TodoList from "../../components/todo/todoList";

export default function Todo() {
  return (
    <>
      <Sidebar />
      <TodoList />
    </>
  );
}
