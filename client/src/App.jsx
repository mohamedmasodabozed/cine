import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Layout/Header'
import Sidebar from './Layout/Sidebar'
import Landing from './Pages/Landing'
import Movie from './Pages/Movie'
import TvShows from './Pages/TvShows'
import Anime from './Pages/Anime'
function App() {
  return (
    <div className="flex min-h-screen bg-[#141414]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/tv-series" element={<TvShows />} />
            <Route path="/anime" element={<Anime />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
