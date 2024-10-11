import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Collections from './pages/Collections'
import Heritage from './pages/Heritage'
import Storelocator from './pages/Storelocator'
import Shopnow from './pages/Shopnow'
import ScrollToTop from './pages/ScrollTop';
// import { Login } from '@mui/icons-material'
import Signup from './pages/Signup'
import Login  from './pages/Login'


function App() {


  return (
    <>
      <div>
        <ScrollToTop />
        <div style={{ overflow: 'hidden' }}>
          <Header />

          <Routes>

            <Route path='/' element={<Landing />} />
            <Route path='/collections' element={<Collections />} />
            <Route path='/heritage' element={<Heritage />} />
            <Route path='/storelocator' element={<Storelocator />} />
            <Route path='/shopnow' element={<Shopnow />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>

          </Routes>

          <Footer />
        </div>
      </div>

    </>
  )
}

export default App
