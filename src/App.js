import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/src/components/Home.jsx">Home</Link>
          </li>
          <li>
            <Link to="/src/components/About.jsx">About</Link>
          </li>
          <li>
            <Link to="/src/components/Contact.jsx">Contact</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/src/components/Home.jsx">
            <Home />
          </Route>
          <Route path="/src/components/About.jsx">
            <About />
          </Route>
          <Route path="/src/components/Contact.jsx">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
