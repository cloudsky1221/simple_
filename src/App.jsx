import { useState } from 'react'
import './App.css'

import Navbar from './Navbar/Navbar'
import Card from './Card/Card'
import Banner from './Banner/Banner'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Advantages from './Advantages/Advantages'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Banner />
      <Advantages />
      <Card />
      <Footer />
    </div>
  )
}

export default App
