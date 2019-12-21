import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Footer from './components/Footer/Footer';
// import { tsConstructorType } from "@babel/types";
import City from "./pages/City";
import About from "./pages/About";
import RestaurantDetail from "./pages/RestaurantDetail";
import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  
  render() {    
    return (
      <Router>
        <Navbar />
          <Route path="/" exact component={Home}></Route> 
          <Route path="/city/:city_id" component={City}></Route> 
          <Route path="/restaurant/:restaurant_id" component={RestaurantDetail}></Route> 
          <Route path="/about" component={About}></Route> 
        <Footer />
      </Router>
    );
  }
}

export default App;
