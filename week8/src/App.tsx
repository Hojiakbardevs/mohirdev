
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NotPages from './Pages/NotPages'
import Contacts from './Pages/Contacts'
import RootLayout from './components/RootLayout'
import Blog from './blog/Blog'
import Profile from './profile/Profile'
import { useState } from 'react'
import { Iuser } from './shared/interface/user.interface'
import Protected from './guards/Protected'
function App() {

  const [user, setUser] = useState<Iuser | null>(null)

  const handlerLogin = () => {
    setUser({id:1, name:"Abdulhakimov Hojiakbar", email:"abdulhakimovhojiakbar@gmail.com"})
  }
  const handlerLogout = () => {
    setUser(null)
  } 

  return (
    <BrowserRouter>
    {user ? <button onClick={handlerLogout}>Logout</button> : <button onClick={handlerLogin}>Login</button>}
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotPages />} />
        <Route path="blog/:slag" element={<Protected user={user}>
          <Blog />
        </Protected>} />
        <Route path="profile" element={<Profile />}>
          <Route index element={<h1>Please select options</h1>} />
          <Route path='details' element={<h1>Details</h1>} />
          <Route path='posts' element={<h1>Posts</h1>} />
        </Route>

      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
