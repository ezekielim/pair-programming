import React from "react";
import { Link } from "react-router-dom";
import Contact from "./components/contact";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/Contact">About Us </Link>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Header} exact />
        <Route path="/Contact" component={Contact} />
      </Switch>
    );
  }
}

export default App;
