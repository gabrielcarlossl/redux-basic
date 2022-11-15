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
          <main>
            <Sidebar></Sidebar>
            <Player></Player>
          </main>
        </Provider>
      </div>
    );
  }
}

export default App;
