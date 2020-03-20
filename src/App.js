import React from 'react';
import logo from './logo.svg';
import './App.css';
import NevBar from "./Views/Home/NevBar"
import { BrowserRouter, Route } from "react-router-dom"
import Koneasentaja from "./Views/Home/components/Koneasentaja"
import Koneistaja from "./Views/Home/components/Koneistaja"
import Levyseppähitsaaja from "./Views/Home/components/Levyseppähitsaaja"
import Planmeca from "./Views/Home/components/Planmeca"

function App() {
  return (
    <div className="App">
      Tablet Application 
      <NevBar/>
      team work 
      <BrowserRouter>
     <Route path= "/koneasentaja" component={Koneasentaja}></Route>
     <Route path= "/koneistaja" component={Koneistaja}></Route>
     <Route path= "/levy" component={Levyseppähitsaaja}></Route>
     <Route path= "/Planmeca" component={Planmeca}></Route>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
