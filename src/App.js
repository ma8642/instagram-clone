// src.App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
//import Post from "./components/Post";
import Posts from "./components/Posts";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <section className="App-main">
            <Posts apollo_client={client} />
          </section>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
