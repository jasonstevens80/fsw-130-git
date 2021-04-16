const redux = require("redux")


function addMovie(movie) {
    return {
        type: "ADD_MOVIE",
        payload: movie
    }
}

function removeMovie(movie) {
    return {
        type: "REMOVE_MOVIE",
        payload: movie
    }
}

function getAllMovies(movies) {
    return {
        type: "GET_ALL_MOVIES",
        payload: movies
    }
}


function movieReducer(movies = [], action) {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...movies,  action.payload]
        case "REMOVE_MOVIE": {
            const newArr = movies.filter(movie => movie !== action.payload)
            return newArr
        }
        case "GET_ALL_MOVIES":
            return [...movies]
        default: 
            return movies

    }
}

module.exports = {addMovie, removeMovie, getAllMovies, movieReducer}