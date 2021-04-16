const redux = require("redux")

function removetvshow(tvshow) {
    return {
        type: "REMOVE_TVSHOW",
        payload: tvshow
    }
}

function addtvshow(tvshow) {
    return {
        type: "ADD_TVSHOW",
        payload: tvshow
    }
}

function getalltvshows(tvshows) {
    return {
        type: "GET_ALL_TVSHOWS",
        payload: tvshows
    }
}

function tvshowReducer(tvshows = [], action) {

    switch(action.type) {

        case "ADD_TVSHOW":
            return [...tvshows,  action.payload]

        case "REMOVE_TVSHOW": {
            const tvArr = tvshows.filter(tvshow => tvshow !== action.payload)
            return tvArr
        }
        case "GET_ALL_TVSHOWS": 
            return [...tvshows]

        default: 
            return tvshows

    }
    
}

module.exports = {removetvshow, addtvshow, getalltvshows, tvshowReducer}