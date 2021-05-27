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

import * as Styled from './home.styled'

@observer
export default class Home extends Component {
  pushToMyList(location) {
    action(ListStore.myList.push(clone(location)))
    getValueFormat(ListStore.myList.length - 1)
    getHomeStopPoint()
  }

  render() {
    return (
      <Styled.HomeContainer>
        <Styled.Details>
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
            <Styled.ButtonAddList className="add-to-list-button" onClick={action(() => this.pushToMyList(TravelStore))}>
              ADD TO MY LIST
            </Styled.ButtonAddList>
          </If>
        </Styled.Details>
        {ListStore.myList.length <= 0 ? null : (
          <Styled.MyList>
            <h2>MY LIST</h2>
            <MyList />
          </Styled.MyList>
        )}
      </Styled.HomeContainer>
    )
  }
}
