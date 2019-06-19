import React, { Component } from "react";
import "./App.css";
import Image from "./Components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image myImage={"https://i.kym-cdn.com/entries/icons/mobile/000/028/367/cover1.jpg"} />
      </div>
    );
  }
}

export default App;