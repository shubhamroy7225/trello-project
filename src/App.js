import React from "react";
import "./App.css";
import Header from "./components/header";
import Boards from "./components/boards";
import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/boards" exact component={Boards} />
      </React.Fragment>
    </Router>
  );
}

export default App;
