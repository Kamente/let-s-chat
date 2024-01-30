import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Router>
        <div className='App'>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;