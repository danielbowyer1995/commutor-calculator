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

    // createNewArray() {
    //     const newListItem = ListStore.myList.splice(0)
    //     this.state.locations.push(newListItem)
    //     console.log(newListItem)
    // }

    // componentDidMount(){
        
    // }
    

    render(){
        console.log(ListStore.myList)
        return(
            <div>
                {ListStore.myList.map((location, i) => 
                    <div key={`myList${i}`}>
                        <TravelSummary 
                            location={location.homeLocation}
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
