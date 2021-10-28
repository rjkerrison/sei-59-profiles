import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import { links } from './components/profiles'

function App() {
  return (
    <Router>
      <Nav links={links} />
      <Switch>
        {links.map((props) => (
          <Route {...props} />
        ))}
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  )
}

export default App
