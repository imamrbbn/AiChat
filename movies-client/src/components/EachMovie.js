import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

import ModalDetailMovie from './ModalDetailMovie'
import { 
  ADD_TO_FAVORITE, 
  DELETE_FAVORITE, 
  FETCH_FAVORITE 
} from '../store/actions/FavoritesAction'

export default function EachMovieData(props) {
  const dispatch = useDispatch()
  const movie =  props.movie
  let flagFavorite = 'false'
  const favorites = useSelector(state => state.FavoritesReducer.favorites)

  useEffect(() => {
    dispatch(FETCH_FAVORITE())
  }, [dispatch])
  
  favorites.forEach(favorite => {
    if (favorite.imdbID == movie.imdbID) {
      flagFavorite = 'true'
    }
  });
  
  function handleAddToFavorite() {
    dispatch(ADD_TO_FAVORITE(movie))
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Successfully added!'
    })
    
  }

  function handleRemoveFavorite() {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#27ae60',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Successfully Removed!',
           '',
          'success'
        )
        dispatch(DELETE_FAVORITE(movie))
      }
    })
  }

  return (
    <tr >
      <td id="movieTitle" className="text-left"
        style={{width: '40%'}}>
        <ModalDetailMovie detailMovie={movie}/></td>
      <td>{movie.Year} </td>
      <td>{movie.imdbID} </td>
      <td>
        {flagFavorite == 'false' ?
          <FontAwesomeIcon onClick={handleAddToFavorite} type="button" 
            icon={faStar} color="#9e9e9e" size="lg"/>
          :
          <FontAwesomeIcon onClick={handleRemoveFavorite} type="button" 
            icon={faStar} color="#76BD72" size="lg"/>
        }
        </td>
    </tr>
  )
}
