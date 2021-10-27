import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Robin from './components/Robin'
import { Shak } from './components/Shak'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/robin' component={Robin} />
        <Route path='/shak' component={Shak} />
      </Switch>
    </Router>
  )
}

export default App
