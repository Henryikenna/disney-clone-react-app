import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  )
}

export default App
