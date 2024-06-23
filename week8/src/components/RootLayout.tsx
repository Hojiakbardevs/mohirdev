
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import "./../index.css"

export default function RootLayout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
