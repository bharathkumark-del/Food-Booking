import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sucess from './pages/Sucess'
import Error from './pages/Error'
import ProtectRout from './components/ProtectRout'
import CategoryMenu from './components/CategoryMenu'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route  path="/" element={<Home/>} />
      <Route path="/success" element={<ProtectRout element={<Sucess/>}/>} />
      <Route path='/lunch' element={<Home/>} />
      <Route path='/breakfast' element={<Home/>} />
      <Route path='/dinner' element={<Home/>} />
      <Route path='/snacks' element={<Home/>} />


      
      <Route path="/*" element={<Error/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App