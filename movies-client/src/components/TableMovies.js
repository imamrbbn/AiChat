import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import EachMovieData from './EachMovie'
import { FETCH_SEARCH_MOVIES, SET_PAGE } from '../store/actions/MoviesActions'

export default function TableMovies() {
	const dispatch = useDispatch()
  const movies = useSelector(state => state.MoviesReducer.movies)
	const key = useSelector(state => state.MoviesReducer.key)
	const page = useSelector(state => state.MoviesReducer.page)
	let previous
	let next

	if (page <= 1) previous = true

	function handlePreviousPage() {
		let moveToPage = page - 1
		dispatch(SET_PAGE(moveToPage))
    dispatch(FETCH_SEARCH_MOVIES(key, moveToPage))
	}
	
	function handleNextPage() {
		let moveToPage = page + 1
		dispatch(SET_PAGE(moveToPage))
    dispatch(FETCH_SEARCH_MOVIES(key, moveToPage))
  }
  return (
    <div className="table-list mx-auto">
	
        <div className="card tableHeadBackground mx-auto noBorder shadow-sm"> 
            <div className="text-white row">
            <button className=" btn btn-secondary" type="button" id="btn-page"
          onClick={handlePreviousPage} disabled={previous} > Previous </button>
            <span className="mx-auto">
                <h2 className="mb-0 mt-1 font-weight-bold">Movies List</h2>
            </span>
            <button className=" btn btn-secondary" type="button" id="btn-page"
          onClick={handleNextPage}  disabled={next}> Next </button>
            </div>
        </div>

        <div className="card tableBackground shadow" >
            <table className="table text-center mt-4 " >
            <thead className='table-borderless' id='darkGreyColor' 
                style={{fontWeight:'bold', fontSize:'1.2em'}}>
            <tr>
                <th scope="col" >Title</th>
                <th scope="col">Year</th>
                <th scope="col">imdb ID</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody >

                {movies && movies.map((movie,i) => {
                    return(
                       <EachMovieData 
                        movie={movie}
                        key={i} 
                        />
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}
