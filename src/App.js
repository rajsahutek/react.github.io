import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Service from "./ReactMenu/Service";
import Home from "./ReactMenu/Home";
import About from "./ReactMenu/About";
import Contact from "./ReactMenu/Contact";
import Navbar from "./ReactMenu/Navbar";
import Footer from "./ReactMenu/Footer";
import Test from "./ReactMenu/Test";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Test" component={Test} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;