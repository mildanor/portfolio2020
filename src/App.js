import React from 'react';
//import './App.css';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Who from './components/who';
import Side from './components/side';
import Projects from './components/projects';
import cern from './components/cern';
import tk from './components/tk';
import justabeer from './components/justabeer';

function App() {
  return (
    <Router>
    <div>
      <nav className="navigation">
      <ul>
          <li>
            <NavLink to="/" className="link">Home</NavLink>
          </li>
          <li><a className="link" href="https://drive.google.com/file/d/1MltdR9UAXKmtT8l2V1UM6ik_0XhAUPaJ/view?usp=sharing">
  CV
</a></li>
        </ul>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" component={Projects}>
          <Projects />
        </Route>
        <Route exact path="/side" component={Side}>
          <Side />
        </Route>
        <Route exact path="/who" component={Who}>
        </Route>
        <Route exact path="/windowstoolbox" component={cern}>
        </Route>
        <Route exact path="/tavaratkotiin" component={tk}>
        </Route>
        <Route exact path="/justabeer" component={justabeer}>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

/*
 <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/" className="link">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/side" className="link">Side</NavLink>
          </li>
          <li>
            <NavLink to="/who" className="link">Who</NavLink>
          </li>
        </ul>
*/