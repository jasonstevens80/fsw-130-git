import { combineReducers } from 'redux'
import pretzelReducer from './pretzels/pretzelReducer'
import beerReducer from './beer/beerReducer'
import nutsReducer from './nuts/nutsReducer'

const rootReducer = combineReducers({
    pretzels: pretzelReducer,
    beer: beerReducer,
    nuts: nutsReducer
})

export default rootReducer
