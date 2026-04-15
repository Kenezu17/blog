import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Landpage from './page/landpage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landpage />} />
      </Routes>
    </>
  )
}

export default App