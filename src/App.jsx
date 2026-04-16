import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './page/landpage'
import Blog from './page/blogpage'
import About from './page/about'
import Contact from './page/contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
      </Routes>
    </> 
  )
}

export default App