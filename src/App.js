import "./App.css";

import { Route, Switch } from "react-router-dom";
import ContactPage from "./pages/contact";
import Home from "./pages";
import ResumePage from "./pages/resume";
import AboutPage from "./pages/about";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/resume" component={ResumePage} exact />
        <Route path="/about" component={AboutPage} exact />
      </Switch>
    </div>
  );
}

export default App;
