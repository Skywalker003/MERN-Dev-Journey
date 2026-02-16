import './App.css'
import Home from './components/Home'
import About from './components/About' 
import Contact from './components/Contact'
import User from './components/User'
import Html5 from './components/Html5'
import Js from './components/Js'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/user/1">User 1</Link> |
        <Link to="/user/2">User 2</Link> |
        <Link to="/user/3">User 3</Link> |
        <Link to="/courses/html5">Courses</Link> |
        <Link to="/courses/javascript">JavaScript</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/courses">
          <Route path="html5" element={<Html5 />} />
          <Route path="javascript" element={<Js />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
