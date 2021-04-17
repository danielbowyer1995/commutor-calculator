import axios from 'axios'
import {postcodeValidator} from 'postcode-validator'

import FormStore from '../stores/form.store'
import ListStore from '../stores/list-store'
import TravelStore from '../stores/travel.store'

export const getValueFormat = (index) => {
    if (FormStore.dailyTravelTime >= ListStore.myList[index].trainTravelTime) {
        ListStore.myList[index].lowerValue = true
        ListStore.myList[index].higherValue = false
    }
    if (FormStore.dailyTravelTime < ListStore.myList[index].trainTravelTime) {
        ListStore.myList[index].lowerValue = false
        ListStore.myList[index].higherValue = true
    }
}

export async function validatePostCode(postCode) {
    if (postcodeValidator(postCode, 'GB') === true) {
        TravelStore.show = true
    }
    else {
        alert(`The postcode: ${postCode} does not exist. Please enter a valid postcode`)
        TravelStore.show = false
    }

}

export async function getDestination(){
    let destinationPostCode = FormStore.destinationPostCode
    axios.get(`https://api.postcodes.io/postcodes/${destinationPostCode}`)
        .then(res => {
            FormStore.destinationCoords.latitude = res.data.result.latitude
            FormStore.destinationCoords.longitude = res.data.result.longitude
        })
        .catch(err => (err))
}

export async function getHomeLocation(){
    let homePostCode = FormStore.homePostCode
    axios.get(`https://api.postcodes.io/postcodes/${homePostCode}`)
        .then(res => {
            TravelStore.homeLocation = res.data.result.admin_district
            FormStore.homeCoords.latitude = res.data.result.latitude
            FormStore.homeCoords.longitude = res.data.result.longitude
        })
        .catch(err => console.log(err))
}

// export function getNearestHomeStations(){
//     axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${FormStore.homeCoords.latitude},${FormStore.homeCoords.longitude}&radius=5000&type=train_station&key=$FILLIN`,{
//         headers: {
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}})
//         .then(res => {
//             TravelStore.nearestHomeStation = res.data.results
//             console.log(TravelStore.nearestHomeStation)
//         })
// }



// export function getNearestDestinationStations(){
//     axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${FormStore.destinationCoords.latitude},${FormStore.destinationCoords.longitude}&radius=5000&type=train_station&key=FILLIN`,{
//         headers: {
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}})
//         .then(res => {
//             TravelStore.nearestDestinationStation = res.data.results
//             console.log(TravelStore.nearestHomeStation)
//         })
// }

// export function getNearestHomeStations(){
//     axios.get(`https://api.tfl.gov.uk/StopPoint/?lat=${FormStore.homeCoords.latitude}&lon=${FormStore.homeCoords.longitude}&stopTypes=NaptanRailStation&radius=5000`,{
//         headers: {
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',}})
//         .then(res => {
//             TravelStore.nearestHomeStation = res.data.results
//             console.log(TravelStore.nearestHomeStation)
//         })
// }

export const getTravelDetails = () => {
    axios.get(`https://api.tfl.gov.uk/Journey/JourneyResults/${FormStore.destinationPostCode}/to/${FormStore.homePostCode}&nationalSearch=true`)
     .then(res => {
         TravelStore.journeyData = res.data.journeys
         TravelStore.trainTravelTime = res.data.journeys[0].duration
        })
    //  .then(res => {
    //      TravelStore.journeyData = res.data
    //  })
    //  .then(console.log(TravelStore.journeyData))
}

export const getFareInfo = () => {
    axios.get('https://api.tfl.gov.uk/StopPoint/910GGRVPK/FareTo/910GLNDNBDC')
    .then(res => {
        console.log(res)
    })
}
