import { observer } from 'mobx-react'
import React, { Component } from 'react'

import './my-list.styles.scss'

import ListStore from '../../stores/list-store'

import TravelSummary from '../travel-summary/travel-summary.component'
class MyList extends Component {
  render() {
    console.log(ListStore.myList)

    return (
      <div className="list-item-container">
        {ListStore.myList.map((location, i) => (
          <div className="list-item" key={`myList${i}`}>
            <TravelSummary
              location={location.homeLocation}
              trainTime={location.trainTravelTime}
              trainCost={location.trainTravelCost.toFixed(2)}
              carTime={location.dailyCarTime}
              carCost={location.dailyCarSpend}
              id={i}
            />
            <div className="container-cross">
              <span className="cross" onClick={() => ListStore.myList.splice(i, 1)}>
                &#215;
              </span>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default observer(MyList)
