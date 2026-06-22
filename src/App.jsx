import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Gallery from './components/gallery/Gallery'
import Title from './components/title/Title'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='container'>
      <Title/>
<Program/>
    </div>
    <Gallery/>
    
        
    </>
  )
}

export default App
