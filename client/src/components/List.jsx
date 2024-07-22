import { useState } from "react";

const List = ({ id, title }) => {
  const [openEdit, setOpenEdit] = useState(true);
  const [inputValue, setInputValue] = useState(title);

  const handleChange = (e) => {
    const value = e.target.value;

    setInputValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOpenEdit(true);

    console.log("Submitted");
  };

  return (
    <div className="flex items-center justify-between border border-transparent border-b-[#f1f1f1] px-3 py-5">
      {/* Todo title */}
      <p id={id} className="text-xl font-normal">
        {title}
      </p>

      <form className="flex" action="/edit" method="post">
        <input type="hidden" name="updateItemId" value={id} />

        {/* Update list */}
        <input
          type="text"
          name="updateItemTitle"
          onChange={handleChange}
          value={inputValue}
          autoComplete="off"
          autoFocus={true}
          hidden={openEdit}
        />

        <button
          id={id}
          type="submit"
          className="text-2xl text-primaryColor"
          hidden={openEdit}
          onClick={handleSubmit}
        >
          <i className="bx bx-check"></i>
        </button>
      </form>

      <div className="flex flex-row gap-4">
        <button
          className={`text-xl text-primaryColor ${openEdit ? "block" : "hidden"}`}
          onClick={() => {
            setOpenEdit(false);
          }}
        >
          <i className="bx bxs-edit"></i>
        </button>

        {/* Delete button */}
        <form action="/delete" method="post">
          <input hidden={true} type="checkbox" name="deleteItemId" value={id} />
          <button type="submit" className="text-xl text-primaryColor">
            <i className="bx bxs-trash"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default List;
