import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieFirst from "./components/content/MovieFirst";
import Navbar from "./components/layout/Navbar";
import Character from "./pages/Character";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/movie/:id">
          <MovieFirst />
        </Route>
        <Route path="/character/:id" exact>
          <Character />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
