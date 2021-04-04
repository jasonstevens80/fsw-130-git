import {Buy_Beer} from './beerTypes'

const initialState = {
    numOfBeer:1000
}

const beerReducer = (state = initialState , action) =>{
    switch(action.type) {
        case Buy_Beer: return {
            ...state,
            numOfBeer:state.numOfBeer - 1
        }
        default: return state
    }
}

export default beerReducer