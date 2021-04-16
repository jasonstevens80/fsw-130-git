  
const redux = require("redux")
const {combineReducers, createStore} = redux

const {movieReducer} = require ("./movies")
const {tvshowReducer} = require ("./tvshows")

const rootReducer = combineReducers({
    movies: movieReducer, 
    tvshows: tvshowReducer,
    allmovies: movieReducer,
    alltvshows: tvshowReducer
})

const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})

module.exports = store 