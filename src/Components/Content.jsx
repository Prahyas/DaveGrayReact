const Content = () => {
  const handleClick = () => {
    alert("Button Clicked");
  };

  const handleClick2 = (name) => {
    alert(`Display my name : ${name}`);
  };

  const handleClick3 = (e) => {
    alert(`This is an event : ${e.target.innerText}`);
  };

  return (
    <main className="space-x-2">
      <button className="border" onClick={handleClick}>
        {" "}
        Click Me
      </button>

      <button
        className="border"
        onClick={() => {
          handleClick2("Prayash");
        }}
      >
        {" "}
        Click Me 2{" "}
      </button>
      <button className="border" onClick={(e) => handleClick3(e)}>
        {" "}
        Click Me 3
      </button>
    </main>
  );
};

export default Content;
