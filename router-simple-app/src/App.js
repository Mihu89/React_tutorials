import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Shop from './components/Shop';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
