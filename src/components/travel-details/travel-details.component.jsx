import { observer } from 'mobx-react'
import React from 'react'
import FormStore from '../../stores/form.store'
import TravelStore from '../../stores/travel.store'
import Loader from '../../components/loader/loader.component'

import './travel-details.styles.scss'

const TravelDetails = (props) => {
    return(

        <div className='travel-list-item'>
            {/* add If component conditional in here */}
            <If condition={TravelStore.show}>
                <div className='list-item'>
                    <div className='location-details'>
                        <h3 className='option-bold' style={!FormStore.loading ? null : {opacity: .1}} >
                            {props.homeLocation}
                        </h3>
                        <span className='option' style={!FormStore.loading ? null : {opacity: .1}} >
                            Train travel time: {props.trainTime} mins
                        </span>
                        <span className='option' style={!FormStore.loading ? null : {opacity: .1}} >
                            Train travel cost: £{props.trainCost}
                        </span>
                        <div className='loader '>
                            <If condition={FormStore.loading}>
                                <Loader />
                            </If>
                        </div>
                    </div>
                </div>
            </If>
        </div>
    )
}

// class TravelDetails extends Component {

//     constructor(){
//         super();

//         this.state = {
//             trainTime: 0,
//             trainCost: 0,
//             carTime: 0,
//             carCost: 0,
//             homePostcode: '',
//         }
//     }

//     render(){
//         return(
//             <div className='location-details'>
//
//             </div>
//         )
//     }
// }

export default observer(TravelDetails)
