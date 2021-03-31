import React from 'react'

const TravelSummary = (props) => {
    return(
        <div className='location-details'>
            <span className='option'>Train travel time: {props.trainTime} mins</span>
            <span className='option'>Train travel cost: £{props.trainCost}</span>
            <span className='option'>Car travel time: {props.carTime} mins</span>
            <span className='option'>Car travel cost: £{props.carCost}</span>
            {/* <button>Add to list</button> */}
        </div>
    )
}

export default TravelSummary