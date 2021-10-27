import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Simon from './components/Simon'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/simon' component={Simon} />
      </Switch>
    </Router>
  )
}

export default App
