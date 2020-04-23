import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DigimonContext = createContext();

const DigimonApiProvider = (props) => {
  const [digimon, setDigimon] = useState([]);
  useEffect(() => {
    axios
      .get("https://digimon-api.herokuapp.com/api/digimon")
      .then((res) => {
        setDigimon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DigimonContext.Provider value={{ digimon }}>
      {props.children}
    </DigimonContext.Provider>
  );
};

export default DigimonApiProvider;
