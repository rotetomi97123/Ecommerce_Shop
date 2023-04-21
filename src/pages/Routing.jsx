import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ItemInfo from './ItemInfo'
import Products from './Products'

const Routing = () => {
  return (
    <Routes>
          <Route path='/'  element={<HomePage />}  />
          <Route path='/ItemInfo'  element={<ItemInfo />}  />
          <Route path='/Products' element={<Products />} />
    </Routes>
  )
}


export default Routing