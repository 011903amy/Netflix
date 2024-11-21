import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import HomePage from './homepage/pages/frontend/HomePage'
import Movies from './homepage/pages/backend/movies/Movies'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element ={<HomePage/>}/>
        <Route path ="/admin/movies" element={<Movies/>}/>
      </Routes>
    </Router>
  )
}

export default App