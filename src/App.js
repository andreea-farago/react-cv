import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import MobileNav from "./components/navigation/MobileNav";
import DesktopNav from "./components/navigation/DesktopNav";
import Card from "./components/Card";
function App() {
  return (
    <div>
      <MobileNav />
      <DesktopNav />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/about">
          <Card>
            <About />
          </Card>
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;