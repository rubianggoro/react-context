import React, { Component, createContext } from "react";

export const ClassMovieContext = createContext();

export default class ClassMovContextProvider extends Component {
  state = {
    movie: [
      { name: "Back to the future", year: 2000 },
      { name: "Joker", year: 2019 },
      { name: "Spiderman", year: 2003 },
    ],
  };
  render() {
    return (
      <ClassMovieContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ClassMovieContext.Provider>
    );
  }
}
