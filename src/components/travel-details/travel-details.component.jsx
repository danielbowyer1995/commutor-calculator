import { observer } from 'mobx-react'
import React from 'react'
import TravelStore from '../../stores/travel.store'


import './travel-details.styles.scss'

const TravelDetails = (props) => {
    return(
        
        <div>
            {/* add If component conditional in here */}
            {
                !TravelStore.show ? null
                :
                <div className='list-item'>
                    <div className='location-details'>
                        <h3 className='option-bold'>Location: {props.homeLocation}</h3>
                        <span className='option'>Train travel time: {props.trainTime} mins
                        </span>
                        <span className='option'>Train travel cost: £{props.trainCost}</span>
                        {/* <span className='option'>Car travel time: {props.carTime} mins</span>
                        <span className='option'>Car travel cost: £{props.carCost}</span> */}
                        {/* <button>Add to list</button> */}
                    </div>
                </div>
            }
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