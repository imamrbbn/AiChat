const initState = {
  loadingStatus: false,
  errorStatus: false,
  favorites: [],
  chosenFavorite: null
}

function FavoritesReducer(state = initState, action) {
  switch (action.type) {

    case "SET_LOADING":
      return {
        ...state,
        loadingStatus: action.payload
      }
    case "SET_ERROR":
      return {
        ...state,
        errorStatus: action.payload
      }
    case "SET_FAVORITE":
      return {
        ...state,
        favorites: action.payload
      }
    default:
      return state
  }
}

export default FavoritesReducer