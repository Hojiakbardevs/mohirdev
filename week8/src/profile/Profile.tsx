import "./../index.css"
import { Link, Outlet } from "react-router-dom"

const Profile = () => {
  return (
    <div>
        <h1>Abdulhakimov Hojiakbar </h1>
        <ul>
            <li><Link to="details">Details</Link></li>
            <li><Link to="posts">Posts</Link></li>
        </ul>
        <Outlet /> 
    </div>
  )
}

export default Profile