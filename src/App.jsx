import { useState } from 'react'
import './App.css'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'
import TheHeader from './components/TheHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TheHeader />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  )
}

export default App
