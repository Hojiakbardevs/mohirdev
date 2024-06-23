
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NotPages from './Pages/NotPages'
import Contacts from './Pages/Contacts'
import RootLayout from './components/RootLayout'
import Blog from './blog/Blog'
import Profile from './profile/Profile'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotPages />} />
        <Route path="blog/:slag" element={<Blog />} />
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
