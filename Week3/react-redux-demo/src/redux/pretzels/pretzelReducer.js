import {Buy_Pretzels} from './pretzelTypes'

const initialState = {
    numOfPretzels:1000
}

const pretzelReducer = (state = initialState , action) =>{
    switch(action.type) {
        case Buy_Pretzels: return {
            ...state,
            numOfPretzels:state.numOfPretzels - 1
        }
        default: return state
    }
}

export default pretzelReducer