import React, { Component } from "react";

import { ThemeContext } from "../Context/ThemeContext";

export default class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(themeContext) => {
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="navbar"
              style={{ background: theme.ui, color: theme.syntax }}
            >
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
