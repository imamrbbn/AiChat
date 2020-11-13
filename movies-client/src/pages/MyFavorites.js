import React from 'react'

import TableFavorites from '../components/TableFavorites'
import Navbar from '../components/Navbar'
export default function MyFavorites() {


  return (
    <div className="App">
      <Navbar/>
      
      <div className="container ">
			  <TableFavorites/>
      </div>
	  </div>
  )
}
