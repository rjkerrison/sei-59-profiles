import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Robin from './components/Robin'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/robin' component={Robin} />
      </Switch>
    </Router>
  )
}

export default App
