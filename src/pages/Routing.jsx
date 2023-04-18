import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ItemInfo from './ItemInfo'

const Routing = () => {
  return (
    <Routes>
          <Route path='/'  element={<HomePage />}  />
          <Route path='/ItemInfo'  element={<ItemInfo />}  />
    </Routes>
  )
}


export default Routing