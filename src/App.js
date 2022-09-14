import React from "react";
import { Route } from "react-router";

import MainRouter from "./component/MainRouter"
import {BrowserRouter,Router, Switch ,Link } from "react-router-dom"
import SearchWiki from "./pages/SearchWiki";


function App() {
  return (
    <div className="App">
        <SearchWiki/>
     
      
    </div>
  );
}

export default App;
