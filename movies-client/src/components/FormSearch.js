import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'

import { FETCH_SEARCH_MOVIES, SET_KEY, SET_PAGE } from '../store/actions/MoviesActions'

export default function FormSearch() {
  const dispatch = useDispatch()
	const [key, setKey] = useState('')

	function handleChangeKey(event) {
		setKey(event.target.value)
	}

  function handleRunSearchMovies() {
    if (!key) {
      Swal.fire({
        icon: 'error',
        title: 'Input required!',
      })
    } else {
      dispatch(SET_KEY(key))
      dispatch(SET_PAGE(1))
      dispatch(FETCH_SEARCH_MOVIES(key, 1))
    }
	}

  return (
    <div className="input-group mb-3 mt-5" id="inputRes">
      <div className="ml-auto search-form">
      <input type="text" className="form-control" placeholder="Enter movie title here...." 
        aria-describedby="button-addon2" onChange = {handleChangeKey} 
        />
      </div>

      <div className="input-group-append mr-auto">
        <button className=" btn btn-secondary" type="button" id="button-addon2"
          onClick={handleRunSearchMovies}> Search </button>
      </div>
    </div>
  )
}
