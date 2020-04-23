import React from "react";

// Components
import Navbar from "./Components/Navbar";
import FuncMovie from "./Components/FuncMovie";
import ClassMovie from "./Components/ClassMovie";
import DigimonApi from "./Components/DigimonApi";
import ThemeToggle from "./Components/ThemeToggle";

// Context
import ThemeContextProvider from "./Context/ThemeContext";
import FuncMovContextProvider from "./Context/FuncMovContext";
import ClassMovContextProvider from "./Context/ClassMovContext";
import DigimonApiContextProvider from "./Context/DigimonApiContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <FuncMovContextProvider>
          <FuncMovie />
        </FuncMovContextProvider>
        <ClassMovContextProvider>
          <ClassMovie />
        </ClassMovContextProvider>
        <ThemeToggle />
        <DigimonApiContextProvider>
          <DigimonApi />
        </DigimonApiContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
