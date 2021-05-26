import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { action } from 'mobx'
import clone from 'lodash/cloneDeep'

import ListStore from 'stores/list-store'
import TravelStore from 'stores/travel.store'
import FormStore from 'stores/form.store'

import InputForm from 'components/input-form/input-form.component'
import TravelDetails from 'components/travel-details/travel-details.component'
import MyList from 'components/my-list/my-list.component'
import Loader from 'components/loader/loader.component'

import { getValueFormat, getHomeStopPoint } from 'utils/calculator.utils'

import './home.styles.scss'

class Home extends Component {
  pushToMyList(location) {
    action(ListStore.myList.push(clone(location)))
    getValueFormat(ListStore.myList.length - 1)
    getHomeStopPoint()
  }

  render() {
    return (
      <div>
        <div className="home-grid">
          <div className="your-details">
            <h2>YOUR DETAILS</h2>
            <InputForm />
            <If condition={!TravelStore.show && FormStore.loading}>
              <div>
                <Loader />
              </div>
            </If>
            <If condition={TravelStore.journeyData.length}>
              <TravelDetails
                homeLocation={TravelStore.homeLocation}
                trainTime={TravelStore.trainTravelTime}
                trainCost={TravelStore.trainTravelCost.toFixed(2)}
                carTime={0}
                carCost={0}
              />
            </If>
            {/* eslint-disable-next-line */}
            <If condition={TravelStore.show}>
              <button className="add-to-list-button" onClick={action(() => this.pushToMyList(TravelStore))}>
                ADD TO MY LIST
              </button>
            </If>
          </div>
          {ListStore.myList.length <= 0 ? null : (
            <div className="my-list">
              <h2>MY LIST</h2>
              <MyList />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default observer(Home)
