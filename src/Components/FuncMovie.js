import React, { useContext } from "react";
import { MovieContext } from "../Context/FuncMovContext";
import { ThemeContext } from "../Context/ThemeContext";

const FuncMovie = () => {
  const { movie } = useContext(MovieContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  //   console.log(movie);
  return (
    <div
      className="movielist"
      style={{ background: theme.ui, color: theme.syntax }}
    >
      <h2>Movie List with Function Based</h2>
      <ul>
        {movie.map((item, index) => {
          return (
            <li key={index}>
              <strong>{item.name}</strong> <br /> tahun: {item.year}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FuncMovie;
