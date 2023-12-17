const Content = ({ groceryList, checkCompleted, deleteItem }) => {
  return (
    <main className="h-[80vh] space-y-4">
      <div className="my-3 space-y-5">
        {groceryList.map((item) => {
          return (
            <li className="flex items-center gap-3" key={item.id}>
              <input
                onClick={() => checkCompleted(item.id)}
                type="checkbox"
                name="check"
                id="check"
                value={item.completed}
              />
              <label className={item.completed ? `line-through` : ""}>
                {" "}
                {item.item}
              </label>
              <button
                className="border-2 p-1 "
                onClick={() => deleteItem(item.id)}
              >
                X
              </button>
            </li>
          );
        })}
      </div>
    </main>
  );
};

export default Content;
