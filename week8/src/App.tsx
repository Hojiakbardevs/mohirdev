
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NotPages from './Pages/NotPages'
import Contacts from './Pages/Contacts'
import RootLayout from './components/RootLayout'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotPages />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
