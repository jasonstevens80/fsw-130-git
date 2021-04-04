import React from 'react'
import { connect } from 'react-redux'
import { buyNuts } from '../redux'

function NutsContainer(props){
    return (
        <div>
            <h2>Number of Nuts - {props.numOfNuts}</h2>
            <button onClick ={props.buyBeer}>Buy Nuts</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfNuts: state.nuts.numOfNuts

    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyNuts: () => dispatch(buyNuts())
    }
}
export default connect 
    (mapStateToProps,
     mapDispatchToProps)
     (NutsContainer)