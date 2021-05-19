import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/about">
          <About />
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
