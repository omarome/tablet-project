import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function NevBar() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/">
                                <img src={require('../../media/OMNIA_Black_RGB.png')} width="40" style={{ marginRight: '9px' }} height="40"
                                    alt="omnia logo" />
                            Tablet Project
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>

                </nav>

               
                <Switch>
                    <Route path="/about">
                        
                    </Route>
                    <Route path="/users">

                    </Route>
                    <Route exact path="/">

                    </Route>
                </Switch>
            </div>
        </Router>
    )
}