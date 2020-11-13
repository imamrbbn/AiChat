const initState = {
  loadingStatus: false,
  errorStatus: false,
  movies: null,
  chosenMovie: null,
  key: null,
  page: 1
}

function MoviesReducer(state = initState, action) {
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
    case "SET_SEARCH_MOVIES":
      return {
        ...state,
        movies: action.payload
      }
    case "SET_CHOSEN_MOVIE":
      return {
        ...state,
        chosenMovie: action.payload
      }
    case "SET_KEY":
      return {
        ...state,
        key: action.payload
      }
    case "SET_PAGE":
    return {
      ...state,
      page: action.payload
    }
    default:
      return state
  }
}

export default MoviesReducer

initState.movies = [{"Title":"How to Train Your Dragon","Year":"2010","imdbID":"tt0892769","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg"},{"Title":"The Girl with the Dragon Tattoo","Year":"2011","imdbID":"tt1568346","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_SX300.jpg"},{"Title":"How to Train Your Dragon 2","Year":"2014","imdbID":"tt1646971","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_SX300.jpg"},{"Title":"Crouching Tiger, Hidden Dragon","Year":"2000","imdbID":"tt0190332","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDdhMzMxOTctNDMyNS00NTZmLTljNWEtNTc4MDBmZTYxY2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},{"Title":"Red Dragon","Year":"2002","imdbID":"tt0289765","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ4MDgzNjM5MF5BMl5BanBnXkFtZTYwMjUwMzY2._V1_SX300.jpg"},{"Title":"The Girl with the Dragon Tattoo","Year":"2009","imdbID":"tt1132620","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTc2Mjc0MDg3MV5BMl5BanBnXkFtZTcwMjUzMDkxMw@@._V1_SX300.jpg"},{"Title":"The Mummy: Tomb of the Dragon Emperor","Year":"2008","imdbID":"tt0859163","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTU4NDIzMDY1OV5BMl5BanBnXkFtZTcwNjQxMzk3MQ@@._V1_SX300.jpg"},{"Title":"Dragon Ball Z","Year":"1996–2003","imdbID":"tt0214341","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BNGM5MTEyZDItZWNhOS00NzNkLTgwZTAtNWIzY2IzZmExOWMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},{"Title":"How to Train Your Dragon: The Hidden World","Year":"2019","imdbID":"tt2386490","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_SX300.jpg"},{"Title":"Enter the Dragon","Year":"1973","imdbID":"tt0070034","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNGZiMTkyNzQtMDdmZi00ZDNkLWE4YTAtZGNlNTIzYzQyMGM2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"}]
