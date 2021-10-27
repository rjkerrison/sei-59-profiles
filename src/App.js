import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Robin from './components/Robin'
import './App.css'
import Preston from './components/Preston'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/robin' component={Robin} />
        <Route path='/preston' component={Preston} />
      </Switch>
    </Router>
  )
}

export default App
