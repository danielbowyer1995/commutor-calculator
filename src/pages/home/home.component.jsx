import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { action } from 'mobx'
import clone  from 'lodash/cloneDeep'

import './home.styles.scss'

import ListStore from '../../stores/list-store'
import TravelStore from '../../stores/travel.store'

import InputForm from '../../components/input-form/input-form.component'
import TravelDetails from '../../components/travel-details/travel-details.component'
import MyList from '../../components/my-list/my-list.component'



class Home extends Component {


    pushToMyList(location){
        action(ListStore.myList.push(clone(location)))
    }

    render(){
        return(
            <div>
                <div className='home-grid'>
                <div className='your-details'>
                    <h2>YOUR DETAILS</h2>
                    <InputForm />
                    {
                        !TravelStore.journeyData.length ? null 
                        :
                        <TravelDetails
                        homeLocation={TravelStore.homeLocation}
                        trainTime={TravelStore.trainTravelTime}
                        trainCost={0}
                        carTime={0}
                        carCost={0}
                        />
                    }
                    
                    {/* eslint-disable-next-line */}
                    {
                        !TravelStore.show ? null
                        :
                        <button 
                            className='add-to-list-button' 
                            onClick={action(() => this.pushToMyList(TravelStore))}>
                            ADD TO MY LIST
                        </button>
                    }
                </div>
                <div className='my-list'>
                    <h2>MY LIST</h2>
                    <MyList/>
                </div>
                </div>
            </div>
            
        )
    }
}

export default observer(Home)