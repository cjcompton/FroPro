import { useState } from 'react'
import HomeBody from './assets/HomeBody'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeBody />
    </>
  )
}

export default App
