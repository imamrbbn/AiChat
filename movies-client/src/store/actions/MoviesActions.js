import axios from 'axios'
import Swal from 'sweetalert2'
const APIKEY = 'fd133998'  //API Key must be hidden, only shown for demo

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

export function SET_CHOSEN_MOVIE(data) {
  return {
      type: "SET_CHOSEN_MOVIE",
      payload: data
  }
}

export function SET_SEARCH_MOVIES(data) {
  return(dispatch, getState) => {
    dispatch({
      type: "SET_SEARCH_MOVIES",
      payload: data.Search
    })
  }
}

export function SET_KEY(data) {
  return(dispatch, getState) => {
    dispatch({
      type: "SET_KEY",
      payload: data
    })
  }
}

export function SET_PAGE(data) {
  return(dispatch, getState) => {
    dispatch({
      type: "SET_PAGE",
      payload: data
    })
  }
}

export function SET_FETCH_ERROR(data) {
  return(dispatch, getState) => {
    Swal.fire({
      icon: 'error',
      title: 'Not Found!',
    })
  }
}

export function FETCH_SEARCH_MOVIES(key, page) {
  return (dispatch, getState) => {
    dispatch(SET_LOADING(true))
    fetch(`http://www.omdbapi.com/?s=${key}&page=${page}&apikey=${APIKEY}`, {
      method: "GET"
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        if(data.Response === 'False') dispatch(SET_FETCH_ERROR())
        else dispatch(SET_SEARCH_MOVIES(data))
      })
      .catch(err =>  dispatch(SET_FETCH_ERROR(err)))
      .finally(() => dispatch(SET_LOADING(false)))
    }
}


export function GET_MOVIE_DETAIL(key) {
  return (dispatch, getState) => {
    dispatch(SET_LOADING(true))
    fetch(`http://www.omdbapi.com/?i=${key}&plot=full&apikey=${APIKEY}`, {
      method: "GET"
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        dispatch(SET_CHOSEN_MOVIE(data))
      })
      .catch(err =>  dispatch(SET_ERROR(err)))
      .finally(() => dispatch(SET_LOADING(false)))
    }
}


// export function FETCH_SEARCH_MOVIES(key, page) {
//   return (dispatch, getState) => {
//     dispatch(SET_LOADING(true))
//     axios({
//       url: `http://www.omdbapi.com/?s=${key}&apikey=${APIKEY}`,
//       method: 'GET',
//     })
//       .then(({ data }) => {
//         dispatch(SET_SEARCH_MOVIES(data))
//       })
//       .catch(err =>  dispatch(SET_ERROR(err)))
//       .finally(() => dispatch(SET_LOADING(false)))
//     }
// }

// export function GET_MOVIE_DETAIL(key) {
//   return (dispatch, getState) => {
//     dispatch(SET_LOADING(true))
//     axios({
//       url: `http://www.omdbapi.com/?i=${key}&plot=full&apikey=${APIKEY}`,
//       method: 'GET',
//     })
//       .then(({ data }) => {
//         dispatch(SET_CHOSEN_MOVIE(data))
//       })
//       .catch(err =>  dispatch(SET_ERROR(err)))
//       .finally(() => dispatch(SET_LOADING(false)))
//     }
// }
