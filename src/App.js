import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Robin from './components/Robin'
import Arthur from './components/Arthur'
import James from './components/James'
import Monia from './components/Monia'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  const links = [
    { component: Robin, path: '/robin', name: 'Robin' },
    { component: Arthur, path: '/arthur', name: 'Arthur' },
    { component: Monia, path: '/monia', name: 'Monia' },
    { component: James, path: '/james', name: 'James' },
  ]

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
