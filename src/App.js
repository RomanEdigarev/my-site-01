import React from 'react';
import './App.css';
import Header from "./header/Header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Block from "./block/Block";
import {blockDataFour, blockDataOne, blockDataThree, blockDataTwo} from "./block/dataBlocks/DataBlocks";
import Pricing from "./pricing/Pricing";
import Footer from "./footer/Footer";
import Home from "./pages/Home";


function App() {
    return (
        <Router>
            <Header/>
            <Route path={'/'} exact><Home/></Route>
            <Route path={'/services'}><Block isDark={true} blockData={blockDataThree}/></Route>
            <Route path={'/products'}><Pricing/></Route>
            <Route path={'/sign-up'}><Block isDark={false} blockData={blockDataTwo}/></Route>
            <Footer/>
        </Router>
    );
}

export default App;
