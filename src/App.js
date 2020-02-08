// src.App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Post />
        </div>
      </div>
    );
  }
}

export default App;
