import { observer } from 'mobx-react';
import React, { Component } from 'react'

import './my-list.styles.scss'

import ListStore from '../../stores/list-store'

import TravelSummary from '../travel-summary/travel-summary.component'


class MyList extends Component {    

    render(){
        console.log(ListStore.myList)
        return(
            <div>
                {ListStore.myList.map((location, i) => 
                    <div className='list-item' key={`myList${i}`}>
                        <TravelSummary 
                            location={location.homeLocation}
                            trainTime={location.trainTravelTime}
                            trainCost={location.dailyTrainSpend}
                            carTime={location.dailyCarTime}
                            carCost={location.dailyCarSpend}
                        />
                    </div>
                )}
            </div>
        )
    }
}

export default observer(MyList) 
