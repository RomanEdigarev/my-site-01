import React from 'react';
import './App.css';
import Header from "./header/Header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Block from "./block/Block";
import {blockDataOne, blockDataTwo} from "./block/dataBlocks/DataBlocks";


function App() {
  return (
    <Router>
      <Header/>
      <Block isDark={true} blockData={blockDataOne}/>
      <Block isDark={false} blockData={blockDataTwo}/>
    </Router>
  );
}

export default App;
