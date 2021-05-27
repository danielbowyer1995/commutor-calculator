import React from 'react'
import { observer } from 'mobx-react'

import ListStore from 'stores/list-store'

import './travel-summary.styles.scss'

const TravelSummary = (props) => {
  return (
    <div className="location-details">
      <span className="option-bold">{props.location}</span>
      <span className="option">
        Train travel time:
        <span
          style={
            ListStore.myList[props.id].lowerValue
              ? { color: '#5CD85A' }
              : null | ListStore.myList[props.id].higherValue
              ? { color: '#DF362D' }
              : null
          }
        >
          {' '}
          {props.trainTime} mins
        </span>
      </span>
      <span className="option">
        Train travel cost:
        <span
          style={
            ListStore.myList[props.id].lowerCost
              ? { color: '#5CD85A' }
              : null | ListStore.myList[props.id].higherCost
              ? { color: '#DF362D' }
              : null
          }
        >
          {' '}
          £{props.trainCost}
        </span>
      </span>
      {/* <span className='option'>Car travel time: {props.carTime} mins</span>
            <span className='option'>Car travel cost: £{props.carCost}</span> */}
      {/* <button>Add to list</button> */}
    </div>
  )
}

export default observer(TravelSummary)
