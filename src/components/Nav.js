import { Link } from 'react-router-dom'

const Nav = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map(({ path, name }) => (
          <li key={path}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
