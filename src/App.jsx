import { useState } from 'react'
import heroImage from './assets/Peach.webp'
import './App.css'
import Hero from './components/Hero'
import Learn from './components/Learn'
import BuildSection from './components/BuildSection'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className='relative'>
     <Hero/>
    
     <Learn/>
     <BuildSection/>
     <Header/>
     <Footer/>
     </div>
    </>
  )
}

export default App
