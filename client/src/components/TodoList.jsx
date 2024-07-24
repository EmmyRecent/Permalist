import List from "./List";
import InputArea from "./InputArea";
import axios from "axios";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [message, setMessage] = useState("");

  // Get all todo.
  const getTodo = async () => {
    try {
      const result = await axios.get("http://localhost:5000/all");
      setTodoList(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Add new todo.
  const addTodo = async (newTodo) => {
    try {
      const response = await axios.post("http://localhost:5000/add", {
        value: newTodo,
      });
      await getTodo(); // Refresh the list

      setMessage(response.data.message);

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (err) {
      console.error("Failed to add todo:", err);
    }
  };

  // Edit todo.
  const editTodo = async (newTodo, todoId) => {
    try {
      await axios.post("http://localhost:5000/edit", {
        value: newTodo,
        id: todoId,
      });
      await getTodo();
    } catch (err) {
      console.error("Failed to edit todo:", err);
    }
  };

  // Delete todo
  const deleteTodo = async (id) => {
    try {
      await axios.post("http://localhost:5000/delete", {
        value: id,
      });
      await getTodo();
    } catch (err) {
      console.error("Failed to delete todo:", err);
    }
  };

  useEffect(() => {
    getTodo(); // Runs when the component mounts.
  }, []);

  return (
    <div className="wrapper">
      {todoList.map((list) => (
        <List
          key={list.id}
          {...list}
          onDeleteTodo={deleteTodo}
          onEditTodo={editTodo}
        />
      ))}

      <InputArea onAddTodo={addTodo} responseMessage={message} />
    </div>
  );
};

export default TodoList;
