export function SET_LOADING(status) {
  return {
    type: "SET_LOADING",
    payload: status
  }
}

export function SET_ERROR(status) {
  return {
    type: "SET_ERROR",
    payload: status
  }
}

export function SET_FAVORITE(data) {
  localStorage.setItem('favorites_movies', JSON.stringify(data))
  return {
    type: "SET_FAVORITE",
    payload: data
  }
}

export function FETCH_FAVORITE() {
  return(dispatch, getState) => {
    if (localStorage.favorites_movies) {
       const data = JSON.parse(localStorage.favorites_movies)
       dispatch(SET_FAVORITE(data))
     }
     else {
      dispatch(SET_FAVORITE([]))
     }
  }
}

export function ADD_TO_FAVORITE(data) {
  return(dispatch, getState) => {
    let currentFavorites = getState().FavoritesReducer.favorites
    currentFavorites = [data, ...currentFavorites]
    dispatch(SET_FAVORITE(currentFavorites))
  }
}

export function DELETE_FAVORITE(data) {
  return(dispatch, getState) => {
    let currentFavorites = JSON.parse(localStorage.favorites_movies)
    currentFavorites = currentFavorites.filter(eachFavorite => eachFavorite.imdbID !== data.imdbID)
    dispatch(SET_FAVORITE(currentFavorites))
  }
}
