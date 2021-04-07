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

// const api = axios.create({
//     baseURL: 'api.postcodes.io/postcodes/br14dq'
// })


class Home extends Component {

    // componentDidMount(){
    //     let postCode = 'BR14DQ'
    //     axios.get(`https://api.postcodes.io/postcodes/${postCode}`)
    //     .then(res => {
    //         TravelStore.homeLocation = res.data.admin_district
    //         console.log(res.data.admin_district)
    //     })
    // }
    
    pushToMyList(location){
        action(ListStore.myList.push(clone(location)))
    }

    // componentDidMount(){
    //     fetch('api.postcodes.io/postcodes/br14dq')
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    // }
    
    render(){
        return(
            <div>
                <h1>Commuter Calculator</h1>
                <div className='home-grid'>
                <div className='your-details'>
                    <h1>Your Details</h1>
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
                        <button onClick={action(() => this.pushToMyList(TravelStore), () => console.log(ListStore.myList))}>Add to my list</button>
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