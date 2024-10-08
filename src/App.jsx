import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Collections from './pages/Collections'
import Heritage from './pages/Heritage'
import Storelocator from './pages/Storelocator'
import Shopnow from './pages/Shopnow'

function App() {


  return (
    <>
      <div style={{overflow:'hidden'}}>
        <Header />
  
  
        <Routes>
  
          <Route path='/' element={<Landing />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/heritage' element={<Heritage />} />
          <Route path='/storelocator' element={<Storelocator />} />
          <Route path='/shopnow' element={<Shopnow />} />
  
        </Routes>
  
  
        <Footer />
      </div>
    </>
  )
}

export default App
