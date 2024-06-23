
import { Link } from 'react-router-dom'
import "./../index.css"

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/blog/angular">Angular blog</Link>
        <Link to="/blog/react">React blog</Link>
        <Link to="/blog/vue">Vue blog</Link>
        <Link to="/profile">Profile</Link>
    </nav>
  )
}

export default Navbar