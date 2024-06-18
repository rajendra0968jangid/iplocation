import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [ip, setIp] = useState({ });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.zippopotam.us/IN/305627");
      const jsonData = await data.json();
      console.log(jsonData);
      setIp(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
     
    </>
  );
}

export default App;
