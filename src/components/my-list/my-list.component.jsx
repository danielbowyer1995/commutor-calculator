import { observer } from 'mobx-react';
import React, { Component } from 'react'

import ListStore from '../../stores/list-store'

import TravelSummary from '../travel-summary/travel-summary.component'

class MyList extends Component {
    constructor(){
        super();

        this.state = {
            locations: ListStore.myList
        }
    }

    render(){
        console.log(this.state.locations)
        return(
            <div>
                {this.state.locations.map((location, i) => 
                    <div key={`myList${i}`}>
                        <TravelSummary 
                            trainTime={location.dailyTrainTime}
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

// : 0,
//         : 0,
//         : 0,
//         : 0,
//         destinationPostCode: '',
//         homePostCode: '',