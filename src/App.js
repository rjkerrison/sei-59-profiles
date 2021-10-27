import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Robin from "./components/Robin";
import Reisli from "./components/Reisli";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/robin" component={Robin} />
        <Route path="/reisli" component={Reisli} />
      </Switch>
    </Router>
  );
}

export default App;
