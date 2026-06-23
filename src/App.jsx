import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Gallery from './components/gallery/Gallery'
import Title from './components/title/Title'
import About from './components/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='container'>
      <Title subtitle="We Provide master courses" title="Our product"/>
<Program/>
 

<About/>
<Title subtitle="Our Campus" title="Gallery"/>
    </div>
    <Gallery/>

    
        
    </>
  )
}

export default App
