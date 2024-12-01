import React from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { Search } from './components/SearchDiv/Search'
import Home from './Pages/Home'
import { Value } from './components/ValueDiv/Value'
import { Footer } from './components/FooterDiv/Footer'


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
