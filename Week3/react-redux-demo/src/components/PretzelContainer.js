import React from 'react'
import { connect } from 'react-redux'
import { buyPretzels} from '../redux'

function PretzelContainer(props){
    return (
        <div>
            <h2>Number of Pretzels - {props.numOfPretzels}</h2>
            <button onClick ={props.buyPretzels}>Buy Pretzels</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        numOfPretzels: state.pretzels.numOfPretzels

    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyPretzels: () => dispatch(buyPretzels())
    }
}
export default connect 
    (mapStateToProps,
     mapDispatchToProps)
     (PretzelContainer)