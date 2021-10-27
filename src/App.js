import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Robin from './components/Robin'
import Arthur from './components/Arthur'
import James from './components/James'
import Monia from './components/Monia'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/robin' component={Robin} />
        <Route path='/arthur' component={Arthur} />
        <Route path='/monia' component={Monia} />
        <Route path='/james' component={James} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App
