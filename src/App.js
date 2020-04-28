import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Boards from "./Components/boards";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route path="/" exact Component={Home} />
        <Route path="/boards" exact component={Boards} />
      </Router>
    </Provider>
  );
}

export default App;
