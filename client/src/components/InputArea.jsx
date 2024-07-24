import { useState } from "react";

const InputArea = ({ onAddTodo, responseMessage }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTodo(input);

    setInput("");
  };

  return (
    <form className="flex items-center gap-4 p-3">
      <input
        type="text"
        name="newItem"
        placeholder={responseMessage ? responseMessage : "New Item"}
        autoComplete="off"
        autoFocus={true}
        onChange={handleChange}
        value={input}
      />

      <button className="btn" type="submit" name="list" onClick={handleSubmit}>
        <i className="bx bx-plus"></i>
      </button>
    </form>
  );
};

export default InputArea;
