import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import './App.css';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
