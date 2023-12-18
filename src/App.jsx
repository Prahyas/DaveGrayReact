import { useEffect, useState } from "react";
import "./App.css";
import AddItem from "./Components/AddItem";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SearchItem from "./Components/SearchItem";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [groceryList, setgroceryList] = useState(
    JSON.parse(localStorage.getItem("groceryList")) || []
  );

  const [API_URL, setAPI_URL] = useState("http://localhost:5000/items");
  const [addItemInput, setaddItemInput] = useState("");
  const [searchItemInput, setsearchItemInput] = useState("");
  const [errorMsg, seterrorMsg] = useState("");
  const [isLoading, setisLoading] = useState(true);

  const addItem = async (addItemInput) => {
    try {
      const newItem = {
        id: groceryList.length + 1,
        item: addItemInput,
        completed: false,
      };
      const response = await axios.post(API_URL, newItem);
      setgroceryList([...groceryList, response.data]);
      // setgroceryList(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const checkCompleted = async (id) => {
    const newList = groceryList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    const updatedItem = newList.find((item) => item.id == id);
    console.log(updatedItem);
    const response = await axios.put(`${API_URL}/${id}`, updatedItem);

    setgroceryList(newList);
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      const newList = groceryList.filter((item) => item.id !== id);
      setgroceryList(newList);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setgroceryList(response.data);
      } catch (error) {
        console.error(error.message);
        seterrorMsg(error.message);
      } finally {
        setisLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(groceryList);
  }, [groceryList]);

  return (
    <div className="flex justify-center flex-col items-center space-y-5">
      <Header />
      <AddItem
        addItemInput={addItemInput}
        setaddItemInput={setaddItemInput}
        addItem={addItem}
      />
      <SearchItem
        searchItemInput={searchItemInput}
        setsearchItemInput={setsearchItemInput}
      />
      {isLoading && <label> Data is loading...</label>}
      {errorMsg && <label> Sorry there is an error</label>}
      {!errorMsg && (
        <Content
          groceryList={groceryList.filter((item) =>
            item.item.toLowerCase().includes(searchItemInput.toLowerCase())
          )}
          checkCompleted={checkCompleted}
          deleteItem={deleteItem}
        />
      )}
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
