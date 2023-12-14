import { useEffect, useState } from "react";
import AddItem from "./AddItem";

const Content = () => {
  const [groceryList, setgroceryList] = useState([
    {
      id: 1,
      item: "Item 1",
      completed: false,
    },
    {
      id: 2,
      item: "Item 2",
      completed: false,
    },
    {
      id: 3,
      item: "Item 3",
      completed: false,
    },
    {
      id: 4,
      item: "Item 4",
      completed: false,
    },
    {
      id: 5,
      item: "Item 5",
      completed: false,
    },
  ]);

  const checkCompleted = (id) => {
    const newList = groceryList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setgroceryList(newList);
  };

  const addItem = (item) => {
    const newItem = {
      id: groceryList.length + 1,
      item: item,
      completed: false,
    };
    setgroceryList([...groceryList, newItem]);
  };

  const deleteItem = (id) => {
    const newList = groceryList.filter((item) => item.id !== id);
    setgroceryList(newList);
  };

  useEffect(() => {
    console.log(groceryList);
  }, [groceryList]);

  return (
    <main className="h-[80vh]">
      <AddItem addItem={addItem} />
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
