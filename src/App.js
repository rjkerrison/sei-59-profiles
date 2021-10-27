import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Robin from './components/Robin'
import './App.css'
import Monia from './components/Monia'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/robin' component={Robin} />
        <Route path='/monia' component={Monia} />
      </Switch>
    </Router>
  )
}

export default App
