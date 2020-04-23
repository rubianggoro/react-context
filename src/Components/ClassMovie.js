import React, { Component } from "react";
import { ClassMovieContext } from "../Context/ClassMovContext";
import { ThemeContext } from "../Context/ThemeContext";

export default class ClassMovie extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(themeContext) => {
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <ClassMovieContext.Consumer>
              {(classMovieContext) => {
                const { movie } = classMovieContext;

                return (
                  <div
                    className="movielist"
                    style={{ background: theme.ui, color: theme.syntax }}
                  >
                    <h2>Movie List with Class Based</h2>
                    <ul>
                      {movie.map((item, index) => (
                        <li key={index}>
                          <strong>{item.name}</strong> <br />
                          tahun: {item.year}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }}
            </ClassMovieContext.Consumer>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
