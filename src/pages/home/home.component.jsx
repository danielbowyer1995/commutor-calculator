import React, { Component } from 'react'
import { observer } from 'mobx-react'

import './home.styles.scss'

import ListStore from '../../stores/list-store'
import FormStore from '../../stores/form-store'

import InputForm from '../../components/input-form/input-form.component'
import TravelDetails from '../../components/travel-details/travel-details.component'
import MyList from '../../components/my-list/my-list.component'


class Home extends Component {
    constructor(){
        super()

        this.state = {
            travelDetails: {
                trainTime: 5,
                trainCost: 5,
                carTime: 30,
                carCost: 10,
                homePostcode: 'BR14DQ',
            }
        }
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
                        trainTime={this.state.travelDetails.trainTime}
                        trainCost={FormStore.dailyTrainSpend}
                        carTime={this.state.travelDetails.carTime}
                        carCost={this.state.travelDetails.carTime}
                    />
                    {/* eslint-disable-next-line */}
                    <button onClick={ListStore.myList.push(this.state.travelDetails), () => console.log(ListStore.myList)}>Add to my list</button>
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