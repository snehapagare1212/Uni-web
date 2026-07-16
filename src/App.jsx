import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Programs/Program'
import Gallery from './components/gallery/Gallery'
import Title from './components/title/Title'
import About from './components/about/About'
import Testimony from './components/testimony/Testimony'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle="We Provide master courses" title="Our product" />
        <Program />
        <About />
        <Title subtitle="Our Campus" title="Gallery" />
        <Gallery />
        <Title subtitle="What our student says about us?" title="Testimony" />
        <Testimony />
        <Title subtitle="Get in touch with us!" title="Contact" />
        <Contact />
        <Footer/>
      </div>

    </>
  )
}

export default App
