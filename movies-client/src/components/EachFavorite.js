import React from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

import ModalDetailMovie from './ModalDetailMovie'
import { DELETE_FAVORITE } from '../store/actions/FavoritesAction'


export default function EachMovieData(props) {
  const dispatch = useDispatch()
  const favorite =  props.favorite
  
  function handleRemoveFavorite() {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#27ae60',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Successfully Removed!',
           '',
          'success'
        )
        dispatch(DELETE_FAVORITE(favorite))
      }
    })
  }
  
  return (
    <tr >
      <td id="movieTitle" className="text-left"
        style={{width: '40%'}}>
        <ModalDetailMovie detailMovie={favorite}
        /></td>
      <td>{favorite.Year} </td>
      <td>{favorite.imdbID} </td>
      <td>
        <FontAwesomeIcon onClick={handleRemoveFavorite} type="button" 
          icon={faTrash} color="#76BD72" size="lg"/>
      </td>
    </tr>
  )
}
