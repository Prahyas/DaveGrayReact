import React, { useEffect, useState } from "react";

const AddItem = ({ addItem }) => {
  const [item, setitem] = useState("");

  const handleInput = (e) => {
    setitem(e.target.value);
  };

  return (
    <div>
      <input
        className="border p-1"
        type="text"
        name="item"
        id="item"
        value={item}
        onChange={(e) => handleInput(e)}
      />
      <button onClick={() => addItem(item)} className="border p-1">
        Add
      </button>
    </div>
  );
};

export default AddItem;
