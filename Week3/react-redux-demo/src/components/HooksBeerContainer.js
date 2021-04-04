import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyBeer} from '../redux'


function HooksBeerContainer(){
    const numOfBeer = useSelector(state =>state.beer.numOfBeer)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Beer - {numOfBeer}</h2>
            <button onCLick = {() => dispatch(buyBeer())}>Buy Beer</button>
        </div>
    )
}

export default HooksBeerContainer