const store = require("./redux/index.js") 

const {addMovie, getAllMovies} = require ("./redux/movies")
const {removeMovie} = require ("./redux/movies")
const {addtvshow, getalltvshows} = require ("./redux/tvshows")
const {removetvshow} = require ("./redux/tvshows")


store.dispatch(addMovie("Water World"))
store.dispatch(addMovie("Inception"))
store.dispatch(addtvshow("Big Bang Theory"))
store.dispatch(addtvshow("Simpsons"))
store.dispatch(getAllMovies())