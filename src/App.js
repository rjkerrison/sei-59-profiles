import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Robin from './components/Robin'
import Hannah from './components/Hannah'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/robin' component={Robin} />
        <Route path='/hannah' component={Hannah} />
      </Switch>
    </Router>
  )
}

export default App
