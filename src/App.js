import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Robin from './components/Robin'
import './App.css'
import Ed from './components/Ed'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/robin' component={Robin} />
        <Route path='/ed' component={Ed} />
      </Switch>
    </Router>
  )
}

export default App
