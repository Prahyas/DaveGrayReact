import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (endpoint) => {
  const [data, setdata] = useState([]);
  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/${endpoint}`);
        if (response.status !== 200) throw Error("Something has gone wrong");
        setdata(response.data);
      } catch (error) {
        console.log(error.message);
        seterror(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, error, loading };
};

export default useFetchData;
