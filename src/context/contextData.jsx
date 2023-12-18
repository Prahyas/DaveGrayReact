import { createContext, useContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [data, setdata] = useState("Context Data");

  const updateData = (newData) => {
    setdata(newData);
  };

  const contextValue = {
    data,
    updateData,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) throw Error("Context not working");
  return context;
};

export { MyProvider, useMyContext };
