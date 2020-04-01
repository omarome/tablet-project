import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Views/Pages/Home'
import About from './Views/Pages/About'
import Contact from './Views/Pages/Contact'
import Koneasenataja from './Views/components/Koneasentaja'
import Koneautomaatioasentaja from './Views/components/Koneautomaatioasentaja'
import Levyseppähitsaaja from './Views/components/Levyseppähitsaaja'
import Koneistaja from './Views/components/Koneistaja'
import Metso from './Views/components/Metso'
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="navbar-brand" to="/">
                  <img src={require('./media/OMNIA_Black_RGB.png')} width="40" style={{ marginRight: '9px' }} height="40"
                    alt="omnia logo" />
                            Tablet Project
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/">Etusivu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Ota yhteyttä</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Meistä</Link>
              </li>
            </ul>

          </nav>


          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/koneasenataja">
              <Koneasenataja />
            </Route>
            <Route path="/koneautomaatioasentaja">
              <Koneautomaatioasentaja />
            </Route>
            <Route path="/levyseppähitsaaja">
              <Levyseppähitsaaja />
            </Route>
            <Route path="/koneistaja">
              <Koneistaja />
            </Route>
            <Route path="/Metso Oy">
              <Metso />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
