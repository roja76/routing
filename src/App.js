import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Button from 'react-bootstrap/Button';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home" ><Button type="button" class="btn btn-primary">
          Home
     </Button></Link> &nbsp;
        <Link to="/about">Abbbbbbout</Link> &nbsp;
        <Link to="/contact">contact</Link>
        </nav>

       
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            < About/>
          </Route>
          <Route path="/conatct">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}