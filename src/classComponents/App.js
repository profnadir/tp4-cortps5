import React, { Component } from "react";
import Header from "./Header";
import Presentation from "./Presentation";
import Voiture from "./Voiture";

class App extends Component {
  render() {
    return (
      <div>
        <h1>from class</h1>
        <Header />
        <br />
        <Presentation />
        <br/>
        <Voiture />
      </div>
    );
  }
}
export default App;
