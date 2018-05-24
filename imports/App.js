import React, { Component } from "react";

// the app crash when importing ReactiveBase
import { ReactiveBase } from "@appbaseio/reactivesearch";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>My App</h1>
        </header>
      </div>
    );
  }
}
