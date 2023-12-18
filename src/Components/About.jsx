import React, { useContext } from "react";
import useFetchData from "../hooks/useFetchData";
import { useMyContext } from "../context/contextData";

const About = () => {
  const { data, updateData } = useMyContext();
  //   const { data, error, loading } = useFetchData("items");
  //   console.log("custom hook", data, error, loading);
  return <div>Context : {data}</div>;
};

export default About;
