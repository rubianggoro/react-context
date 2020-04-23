import React, { createContext, useState } from "react";

export const MovieContext = createContext();

const FuncMovContextProvider = (props) => {
  const [movie] = useState([
    { name: "Back to the future", year: 2000 },
    { name: "Joker", year: 2019 },
    { name: "Spiderman", year: 2003 },
  ]);
  return (
    <MovieContext.Provider value={{ movie }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default FuncMovContextProvider;
