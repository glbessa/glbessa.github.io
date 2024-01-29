import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Blog from './pages/Blog'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/:id" element={<Blog />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
