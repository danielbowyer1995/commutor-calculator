import { observer } from 'mobx-react';
import React, { Component } from 'react'

import './my-list.styles.scss'

import ListStore from '../../stores/list-store'

import TravelSummary from '../travel-summary/travel-summary.component'
import { getValueFormat } from '../../utils/calculator.utils';


class MyList extends Component {
    
    constructor(){
        super();

        if (ListStore.myList.length < 0){
            getValueFormat(ListStore.myList.indexOf(0))
        }
    }

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
                        <span className='cross' onClick={() => ListStore.myList.splice(i,1)}>&#215;</span>
                    </div>
                )}
            </div>
        )
    }
}

export default observer(MyList) 
