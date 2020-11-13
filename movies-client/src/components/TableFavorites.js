import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import EachFavorite from './EachFavorite'
import { FETCH_FAVORITE } from '../store/actions/FavoritesAction'

export default function TableFavorites() {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.FavoritesReducer.favorites)
  
  useEffect(() => {
    dispatch(FETCH_FAVORITE())
  }, [dispatch])

  return (
    <div className="table-list mx-auto mt-5">
        
        <div className="card tableHeadBackground mx-auto noBorder shadow-sm"> 
            <div className="text-white row">
            <span className="mx-auto">
                <h2 className="mb-0 mt-1 font-weight-bold">Favorites List</h2>
            </span>
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

                {favorites && favorites.map((favorite,i) => {
                    return(
                    <EachFavorite 
                    favorite={favorite}
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