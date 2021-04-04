import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyPretzels} from '../redux'


function HooksPretzelsContainer(){
    const numOfPretzels = useSelector(state =>state.pretzels.numOfPretzels)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Pretzels - {numOfPretzels}</h2>
            <button onCLick = {() => dispatch(buyPretzels())}>Buy Pretzels</button>
        </div>
    )
}

export default HooksPretzelsContainer
