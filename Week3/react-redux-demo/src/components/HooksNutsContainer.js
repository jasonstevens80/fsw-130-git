import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyNuts} from '../redux'


function HooksNutsContainer(){
    const numOfNuts = useSelector(state =>state.nuts.numOfNuts)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Buy Nuts- {numOfNuts}</h2>
            <button onCLick = {() => dispatch(buyNuts())}>Buy Nuts</button>
        </div>
    )
}

export default HooksNutsContainer