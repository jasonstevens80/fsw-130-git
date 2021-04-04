import React from 'react'
import { connect } from 'react-redux'
import { buyBeer } from '../redux'

function BeerContainer(props){
    return (
        <div>
            <h2>Number of Beer - {props.numOfBeer}</h2>
            <button onClick ={props.buyBeer}>Buy Beer</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfBeer: state.beer.numOfBeer

    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyBeer: () => dispatch(buyBeer())
    }
}
export default connect 
    (mapStateToProps,
     mapDispatchToProps)
     (BeerContainer)