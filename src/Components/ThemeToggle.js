import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeToggle = () => {
  const { toggleThemeProvider } = useContext(ThemeContext);
  //   console.log("isTheme", isLightTheme);
  return (
    <div>
      <button onClick={toggleThemeProvider}>Toggle Theme Change</button>
    </div>
  );
};

export default ThemeToggle;
