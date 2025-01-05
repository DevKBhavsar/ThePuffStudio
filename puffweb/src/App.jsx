import { useState } from 'react'
import './index.css'
import Navbar from './Components/Navbar'
import Categories from './Components/Categories'
import Menu from './Components/Menu'
import ByCategory from './Components/ByCategory'
import { Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Search from './Components/Search'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/:category" element={<ByCategory />} />
        <Route path="/search/:search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
