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
import Planmeca from './Views/components/Planmeca'
import Abb from './Views/components/Abb'
import Erikkilä from './Views/components/Erikkilä'
import Hellmaninkonepaja from './Views/components/Hellmaninkonepaja'
import Hilti from './Views/components/Hilti'
import Isevat from './Views/components/Isevat'
import Konepajamäkelin from './Views/components/Konepajamäkelin'
import Levanto from './Views/components/Levanto'
import Temet from './Views/components/Temet'
import Mesvac from './Views/components/Mesvac'
import Levyseppahitsaajapolku from './Views/components/Levyseppahitsaajapolku';









function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link >
                    <img src={require('./media/OMNIA_Black_RGB.png')} 
                     className="project-logo" 
                     alt="omnia logo"
                     onClick={() =>window.open('https://www.omnia.fi', "_blank")  }  />   
                </Link>
               
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/">Etusivu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Ota yhteyttä</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Tietoa meistä</Link>
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
            <Route path="/Levyseppahitsaajapolku">
              <Levyseppahitsaajapolku />
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
            <Route path="/Neles Finland Oy">
              <Metso />
            </Route>
            <Route path="/Planmeca Oy">
              <Planmeca />
            </Route>
            <Route path="/ABB Oy">
              <Abb />
            </Route>
            <Route path="/Erikkilä Oy">
              <Erikkilä />
            </Route>
            <Route path="/Hellmanin Konepaja Oy">
              <Hellmaninkonepaja />
            </Route>
            <Route path="/Hilti Oy">
              <Hilti />
            </Route>
            <Route path="/Isevat Oy">
              <Isevat />
            </Route>
            <Route path="/Konepaja Mäkelin Oy">
              <Konepajamäkelin />
            </Route>
            <Route path="/Levanto">
              <Levanto />
            </Route>
            <Route path="/Mesvac">
              <Mesvac />
            </Route>
            <Route path="/Temet Oy">
              <Temet />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
