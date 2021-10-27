import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Robin from './components/Robin'
import './App.css'
import Rose from './components/Rose'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/robin' component={Robin} />
        <Route path='/rose' component={Rose} />
      </Switch>
    </Router>
  )
}

export default App
