import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SidePopupNav from "./components/nav/SidePopupNav";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";

function App(props) {
  return (
    <Router basename="/portfolio/" >
      <div className="app">
        <SidePopupNav />
        <Route exact path="/" component={Home} />
        <Route exact path="/home/" component={Home} />
        <Route exact path="/work/" component={Work} />
        <Route exact path="/skills/" component={Skills} />
        <Route exact path="/about/" component={About} />
       
      </div>
    </Router>
  );
}

export default App;
