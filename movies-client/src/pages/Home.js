import React from 'react'

import Navbar from '../components/Navbar'
import TableMovies from '../components/TableMovies'
import FormSearch from '../components/FormSearch'

export default function Home() {

	return (
		<div className="App">
			<Navbar/>

			<div className="container ">
				<FormSearch/>
				<TableMovies/>
			</div>
			
	</div>
	)
}
