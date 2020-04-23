import React, { useContext } from "react";
import { DigimonContext } from "../Context/DigimonApiContext";

const DigimonApi = () => {
  const { digimon } = useContext(DigimonContext);
  //   console.log(digimon);
  return (
    <div className="movielist">
      <h2>Digimon APi</h2>
      <ul>
        {digimon.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default DigimonApi;
