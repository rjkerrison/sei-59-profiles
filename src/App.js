import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Robin from './components/Robin'
import Arthur from './components/Arthur'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/robin' component={Robin} />
        <Route path='/arthur' component={Arthur} />
      </Switch>
    </Router>
  )
}

export default App
