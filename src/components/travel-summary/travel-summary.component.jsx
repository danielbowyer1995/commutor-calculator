import React from 'react'
import { observer } from 'mobx-react'

import './travel-summary.styles.scss'

import TravelStore from '../../stores/travel.store'

const TravelSummary = (props) => {
    return(
        <div className='location-details'>
            <span className='option-bold'>Location: {props.location}</span>
            <span className='option' 
                style={TravelStore.lowerValue ? {color:  "#13B000"} : null | TravelStore.higherValue ? {color:  "red"} : null}
            >
                Train travel time: {props.trainTime} mins
            </span>
            <span className='option'>Train travel cost: £{props.trainCost}</span>
            {/* <span className='option'>Car travel time: {props.carTime} mins</span>
            <span className='option'>Car travel cost: £{props.carCost}</span> */}
            {/* <button>Add to list</button> */}
        </div>
    )
}

export default observer(TravelSummary)