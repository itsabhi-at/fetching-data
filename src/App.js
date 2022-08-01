import React, { useEffect, useState } from "react";
import axios from "axios";
import Fortnite from "./Fortnite";

function App() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    return () => {
      axios
        .get("https://fortnite-api.com/v1/banners")
        .then((data) => {
          console.log(data.data.data);
          setEntries(data.data.data);
        })
        .catch((err) => console.log(err));
    };
  }, []);

  return (
    <div className="App">
      {entries && (
        <>
          {entries.map((entry , index) => {
            return(
            <Fortnite key={index} id={entry['id']} name={entry['name']} img={entry['images']['smallIcon']} />)
          })}

        </>
      )}
    </div>
  );
}

export default App;
