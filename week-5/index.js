const store = require("./redux/index.js") 

const {addMovie, getAllMovies} = require ("./redux/movies")
const {removeMovie} = require ("./redux/movies")
const {addtvshow, getalltvshows} = require ("./redux/tvshows")
const {removetvshow} = require ("./redux/tvshows")


store.dispatch(addMovie("Star Wars"))
store.dispatch(addMovie("Batman"))
store.dispatch(addtvshow("Seinfeld"))
store.dispatch(addtvshow("Cheers"))
store.dispatch(getAllMovies())