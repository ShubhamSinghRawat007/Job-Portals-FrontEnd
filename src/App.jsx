import React from 'react'
import { NavBar } from './components/NavBar/Navbar.jsx'
import { Search } from './components/SearchDiv/Search.jsx'
import Home from './Pages/Home'
import { Value } from './components/ValueDiv/Value.jsx'
import { Footer } from './components/FooterDiv/Footer.jsx'


export const App = () => {
  return (
    <div className='w-[90%] m-auto '>
      <NavBar/>
      <Search/>
      <Home/>
      <Value/>
      <Footer/>
    </div>
  )
}
