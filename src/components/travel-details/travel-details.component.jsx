import React from 'react'

import './travel-details.styles.scss'

const TravelDetails = (props) => {
    return(
        <div className='location-details'>
            <h3>Location: {props.homePostcode}</h3>
            <span className='option'>Train travel time: {props.trainTime} mins</span>
            <span className='option'>Train travel cost: £{props.trainCost}</span>
            <span className='option'>Car travel time: {props.carTime} mins</span>
            <span className='option'>Car travel cost: £{props.carCost}</span>
            {/* <button>Add to list</button> */}
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

export default TravelDetails