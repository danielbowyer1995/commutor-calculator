import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { action } from 'mobx'

import listStore from 'stores/list'
import travelStore from 'stores/travel'
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
    listStore.add(location)
    getValueFormat(listStore.getCount())
    getHomeStopPoint()
  }

  render() {
    return (
      <Styled.HomeContainer>
        <Styled.Details>
          <h2>YOUR DETAILS</h2>
          <InputForm />
          <If condition={!travelStore.show && FormStore.loading}>
            <div>
              <Loader />
            </div>
          </If>
          <If condition={travelStore.journeyData.length}>
            <TravelDetails
              homeLocation={travelStore.homeLocation}
              trainTime={travelStore.trainTravelTime}
              trainCost={travelStore.trainTravelCost.toFixed(2)}
              carTime={0}
              carCost={0}
            />
          </If>
          {/* eslint-disable-next-line */}
          <If condition={travelStore.show}>
            <Styled.ButtonAddList onClick={action(() => this.pushToMyList(travelStore))}>ADD TO MY LIST</Styled.ButtonAddList>
          </If>
        </Styled.Details>
        {listStore.getCount() < 0 ? null : (
          <Styled.MyList>
            <h2>MY LIST</h2>
            <MyList />
          </Styled.MyList>
        )}
      </Styled.HomeContainer>
    )
  }
}
