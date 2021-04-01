import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { action } from 'mobx'

import './home.styles.scss'

import ListStore from '../../stores/list-store'
import FormStore from '../../stores/form-store'

import InputForm from '../../components/input-form/input-form.component'
import TravelDetails from '../../components/travel-details/travel-details.component'
import MyList from '../../components/my-list/my-list.component'


class Home extends Component {
    // constructor(){
    //     super()

    //     this.state = {
    //         travelDetails: {
    //             trainTime: 5,
    //             trainCost: 5,
    //             carTime: 30,
    //             carCost: 10,
    //             homePostcode: 'BR14DQ',
    //         }
    //     }
    // }

    pushToMyList(){
        ListStore.myList.push(FormStore.travelDetails) 
    }
    
    render(){
        return(
            <div>
                <h1>Commuter Calculator</h1>
                <div className='home-grid'>
                <div className='your-details'>
                    <h1>Your Details</h1>
                    <InputForm />
                    <TravelDetails 
                        trainTime={FormStore.travelDetails.dailyTrainTime}
                        trainCost={FormStore.travelDetails.dailyTrainSpend}
                        carTime={FormStore.travelDetails.dailyCarTime}
                        carCost={FormStore.travelDetails.dailyCarSpend}
                    />
                    {/* eslint-disable-next-line */}
                    {
                        !FormStore.show ? null
                        :
                        <button onClick={action(this.pushToMyList, () => console.log(ListStore.myList))}>Add to my list</button>
                    }
                </div>
                <div className='my-list'>
                    <h1>My List</h1>
                    <MyList/>
                </div>
                </div>
            </div>
            
        )
    }
}

export default observer(Home)