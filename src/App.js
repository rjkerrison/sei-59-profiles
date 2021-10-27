import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Robin from './components/Robin'
import Arthur from './components/Arthur'
import James from './components/James'
import './App.css'
import Monia from './components/Monia'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/robin' component={Robin} />
        <Route path='/arthur' component={Arthur} />
        <Route path='/monia' component={Monia} />
        <Route path='/james' component={James} />
      </Switch>
    </Router>
  )
}

export default App
