import React, { useRef } from "react";

const AddItem = ({ addItemInput, setaddItemInput, addItem }) => {
  const inputRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(),
          addItem(addItemInput),
          setaddItemInput(""),
          inputRef.current.focus();
      }}
      className="flex gap-3"
    >
      <input
        autoFocus
        ref={inputRef}
        className="border p-1"
        type="text"
        name="addItemInput"
        id="addItemInput"
        value={addItemInput}
        onChange={(e) => setaddItemInput(e.target.value)}
      />
      <button type="submit" className="border p-1">
        Add
      </button>
    </form>
  );
};

export default AddItem;
