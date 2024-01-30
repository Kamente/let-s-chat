import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/navbar" exact component={Navbar} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
