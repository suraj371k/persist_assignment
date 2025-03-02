import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CreateChallenge from './pages/CreateChallenge'
import Footer from './components/Footer'
import Admin from './components/Admin/Admin'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/create' element={<CreateChallenge />} />
    <Route path='/admin' element={<Admin />} />
   </Routes>
   <ToastContainer />
   <Footer />
   </BrowserRouter>
  )
}

export default App