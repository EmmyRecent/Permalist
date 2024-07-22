import { todoList } from "../constants";
import List from "./List";
import InputArea from "./InputArea";

const TodoList = () => {
  return (
    <div className="wrapper">
      {todoList.map((list) => (
        <List key={list.id} {...list} />
      ))}

      <InputArea />
    </div>
  );
};

export default TodoList;
