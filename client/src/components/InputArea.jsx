import { useState } from "react";

const InputArea = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput("");

    console.log("submitted");
  };

  return (
    <form className="flex items-center gap-4 p-3" action="/add" method="post">
      <input
        type="text"
        name="newItem"
        placeholder="New Item"
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
