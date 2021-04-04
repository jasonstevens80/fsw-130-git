import {Buy_Nuts} from './nutsTypes'

const initialState = {
    numOfNuts:1000
}

const nutsReducer = (state = initialState , action) =>{
    switch(action.type) {
        case Buy_Nuts: return {
            ...state,
            numOfNuts:state.numOfNuts - 1
        }
        default: return state
    }
}

export default nutsReducer