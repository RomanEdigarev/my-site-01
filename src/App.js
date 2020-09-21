import React from 'react';
import './App.css';
import Header from "./header/Header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Block from "./block/Block";
import {blockDataFour, blockDataOne, blockDataThree, blockDataTwo} from "./block/dataBlocks/DataBlocks";
import Pricing from "./pricing/Pricing";
import Footer from "./footer/Footer";


function App() {
  return (
    <Router>
      <Header/>
      <Block isDark={true} blockData={blockDataOne}/>
      <Block isDark={false} blockData={blockDataTwo}/>
      <Block isDark={true} blockData={blockDataThree}/>
      <Pricing/>
      <Block isDark={true} blockData={blockDataFour}/>
      <Footer/>
    </Router>
  );
}

export default App;
