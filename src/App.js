import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Robin from './components/Robin'
import EMILE from './components/Emile'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/robin' component={Robin} />
        <Route path='/emile' component={Emile} />
      </Switch>
    </Router>
  )
}

export default App
