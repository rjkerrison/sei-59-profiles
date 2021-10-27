import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Robin from "./components/Robin"
import "./App.css"
import Milo from "./components/Milo"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/robin" component={Robin} />
        <Route path="/milo" component={Milo} />
      </Switch>
    </Router>
  )
}

export default App
