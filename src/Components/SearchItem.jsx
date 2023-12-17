import React, { useState } from "react";

const SearchItem = ({ searchItemInput, setsearchItemInput }) => {
  return (
    <div>
      <input
        className="border p-1"
        type="text"
        name="item"
        id="item"
        placeholder="Search"
        value={searchItemInput}
        onChange={(e) => setsearchItemInput(e.target.value)}
      />
    </div>
  );
};

export default SearchItem;
