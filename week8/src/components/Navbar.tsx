
import { Link } from 'react-router-dom'
import "./../index.css"

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
    </nav>
  )
}

export default Navbar