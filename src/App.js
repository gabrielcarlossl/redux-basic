import { React, Component } from "react";
import "./App.css";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

import store from "./store";

import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Sidebar></Sidebar>
          <Player></Player>
        </Provider>
      </div>
    );
  }
}

export default App;
