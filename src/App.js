import React from 'react';
import './App.css';
import Header from './Components/header';
import Boards from './Components/boards';
import Home from './Components/Home';
import Lists from './Components/Lists';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/boards' exact component={Boards} />
        <Route path='/board/:id' exact component={Lists} />
      </React.Fragment>
    </Router>
  );
}

export default App;
