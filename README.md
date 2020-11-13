# Movies App

Web application to search for movies and save them to favorites. The purpose of the project is to create a movie application using React JS with Single-page application (SPA) concept, optimized for the web interface and responsive, use SPA concets, to help users easily search for movies on the web. It is displayed with a search page and a favorites page, launches a details screen whenever a particular movie is selected, allowing the user to save favorites. This application fetches movie information using omdbapi.com web API.

## Getting Started

App uses The Movie Database API. You have to enter your API key in order to run the app. You can create your own one very easy! http://www.omdbapi.com/. But in this case, you can use the key provided. Remember this is only for demo.

-Git clone this ```https://github.com/imamrbbn/AiChat.git```

-Open the App Folder

-Install dependencies with ```npm install```

-Run it with ```npm start```

## Library and Dependencies:
```
  -react
  -react-dom
  -react-redux  
  -react-router-dom
  -redux  
  -redux-thunk  
  -axios
  -fontawesome
  -bootstrap  
  -react-bootstrap  
  -sweetalert2
  -react-spring
  -react-tilt
```
# Documentation
### Search Movie Page
1. By default, there will be movie data with the 'dragon' keys
2. Display movie data with table
3. Click the title to display the details of the selected movie
4. Click the star icon to add the selected movie to favorites page and click again to remove it, a confirmation notification will appear
5. Use the input form to search for movies, if a movie is not found the notification will appear

### My Favourite Page
1. There will be favorite movies that you choose, the data is fetched from local storage
2. Display favorite movie data with table
3. Click the title to display the details of the selected movie
4. Click the trash icon to remove it, a confirmation notification will appear

### Detail Movie Modal
1. Display detail movie data with modal
2. There will be details of the movie you choose, the data is taken from the API

# API Documentation
This app has:
&nbsp;

## Endpoints
````
- GET /?s=[key]&page=[page]&apikey=[APIKEY]
- GET /?i=[key]&plot=full&apikey=[APIKEY]
````

### RESTful endpoints

### GET Movies
> _Endpoint_
```
  http://www.omdbapi.com/?s=[key]&page=[page]&apikey=[APIKEY]
```

_Request Parameters_
```
  "s" for Movie title to search. (e.g. dragon)
  "page" for Page number to return. (e.g. 2)
  "Apikey" for Secret token for authentication to gain access.
```
```
  sample => /?s=dragon&page=2&apikey=secret
```

_Response (201)_
```json
  [
    {
      "Title":"How to Train Your Dragon",
      "Year":"2010",
      "imdbID":"tt0892769",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_SX300.jpg"
    },
    {
      "Title":"The Girl with the Dragon Tattoo",
      "Year":"2011",
      "imdbID":"tt1568346",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_SX300.jpg"
    }, 
    ...
  ]

_Response (500 - Internal Server Error)_
```json
{
    "message": "Internal Server Error"
}
```

### GET Detail Movies

> _Endpoint_
```
  http://www.omdbapi.com/?i=[key]&plot=full&apikey=[APIKEY]
```

_Request Parameters_
```
  "i" for A valid IMDb ID. (e.g. tt1285016)
  "plot" for Return short or full plot.
  "Apikey" for Secret token for authentication to gain access.
```
```
  sample => /?i=tt1285016&plot=full&apikey=secret
```

_Response (201)_
```json
  {
    "Title":"The Social Network",
    "Year":"2010","Rated":"PG-13",
    "Released":"01 Oct 2010",
    "Runtime":"120 min",
    "Genre":"Biography, Drama",
    "Director":"David Fincher",
    "Writer":"Aaron Sorkin (screenplay), Ben Mezrich (book)",
    "Actors":"Jesse Eisenberg, Rooney Mara, Bryan Barter, Dustin Fitzsimons",
    "Plot":"On a fall night in 2003, Harvard undergrad and computer programming genius Mark Zuckerberg sits down at his computer and heatedly begins working on a new idea. In a fury of blogging and programming, what begins in his dorm room soon becomes a global social network and a revolution in communication. A mere six years and 500 million friends later, Mark Zuckerberg is the youngest billionaire in history... but for this entrepreneur, success leads to both personal and legal complications.",
    "Language":"English, French",
    "Country":"USA",
    "Awards":"Won 3 Oscars. Another 171 wins & 184 nominations.",
    "Poster":"https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "Ratings":[
      {"Source":"Internet Movie Database","Value":"7.7/10"},
      {"Source":"Rotten Tomatoes","Value":"96%"},
      {"Source":"Metacritic","Value":"95/100"}
    ],
    "Metascore":"95",
    "imdbRating":"7.7",
    "imdbVotes":"614,689",
    "imdbID":"tt1285016",
    "Type":"movie",
    "DVD":"N/A",
    "BoxOffice":"N/A",
    "Production":"Scott Rudin Productions, Trigger Street Productions, Michael De Luca",
    "Website":"N/A",
    "Response":"True"
  }
```

_Response (500 - Internal Server Error)_
```json
{
    "message": "Internal Server Error"
}
```