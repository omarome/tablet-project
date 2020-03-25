import React from 'react';
import logo from './logo.svg';
import './App.css';
import NevBar from "./Views/Home/NevBar"
import { BrowserRouter, Route } from "react-router-dom"
import Koneasentaja from "./Views/Home/components/Koneasentaja"
import Koneistaja from "./Views/Home/components/Koneistaja"


function App() {
  return (
    <div className="App">   
      <BrowserRouter>
      <Route path="/koneasentaja" component={Koneasentaja}></Route>
      <Route path="/koneistaja" component={Koneistaja}></Route>
      </BrowserRouter>  
    </div>

  );
}

export default App;
