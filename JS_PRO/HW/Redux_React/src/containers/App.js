import React, {Component} from 'react';
import List from "../components/List";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <List side={"leftList"}/>
        <List side={"rightList"}/>
      </div>
    )
  }
}

export default App;
