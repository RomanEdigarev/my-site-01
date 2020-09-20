import React from 'react';
import './App.css';
import Header from "./header/Header";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
    </Router>
  );
}

export default App;
