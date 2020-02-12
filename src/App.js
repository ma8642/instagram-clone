// src.App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
//import Post from "./components/Post";
import Posts from "./components/Posts";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Pusher from "pusher-js";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends React.Component {
  constructor() {
    super();
    //connect to pusher
    this.pusher = new Pusher("PUSHER_APP_KEY", {
      cluster: "eu",
      encrypted: true
    });
  }
  componentDidMount() {
    if ("actions" in Notification.prototype) {
      alert("You can enjoy the notification feature");
    } else {
      alert("Sorry notifications are NOT supported on your browser");
    }
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header />
          <section className="App-main">
            {/* pass the pusher object and apollo to the posts component */}
            <Posts pusher={this.pusher} apollo_client={client} />
          </section>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
