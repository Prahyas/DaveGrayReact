import { useState } from "react";

const Content = () => {
  const [userName, setuserName] = useState("");

  const displayName = () => {
    let temp = prompt("Enter your name");
    setuserName(temp);
  };

  return (
    <main className="space-x-2">
      <button className="border" onClick={displayName}>
        {" "}
        Show username
      </button>
      <p>This is your username: {userName}</p>
    </main>
  );
};

export default Content;
