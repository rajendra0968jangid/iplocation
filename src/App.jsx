import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [ip, setIp] = useState({ places: [] });

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
      <div>
        <h1>{ip.country}</h1>
        <h1>{ip["country abbreviation"]}</h1>
        <h1>{ip["post code"]}</h1>
        {ip["places"].map((item, index) => (
          <div>
            <p>{item.latitude}</p>
            <p>{item.longitude}</p>
            <p>{item["place name"]}</p>
            <p>{item.state}</p>
            <p>{item["state abbreviation"]}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
