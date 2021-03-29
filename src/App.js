import "./App.css";

import { Route, Switch } from "react-router-dom";
import ContactPage from "./pages/contact";
import Home from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={ContactPage} exact />
      </Switch>
    </div>
  );
}

export default App;
