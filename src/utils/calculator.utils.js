import axios from 'axios'
import {postcodeValidator} from 'postcode-validator'
import { 
    zoneOne, 
    zoneTwo, 
    zoneThree, 
    zoneFour, 
    zoneFive, 
    zoneSix, 
    zoneSeven, 
    zoneEight, 
    zoneNine
} from './zones.data'

import FormStore from '../stores/form.store'
import ListStore from '../stores/list-store'
import TravelStore from '../stores/travel.store'

export const getValueFormat = (index) => {
    if (FormStore.dailyTravelTime >= ListStore.myList[index].trainTravelTime) {
        ListStore.myList[index].lowerValue = true
        ListStore.myList[index].higherValue = false
    }
    else if (FormStore.dailyTravelTime < ListStore.myList[index].trainTravelTime) {
        ListStore.myList[index].lowerValue = false
        ListStore.myList[index].higherValue = true
    }
    if (FormStore.dailyTravelSpend >= ListStore.myList[index].trainTravelCost) {
        ListStore.myList[index].lowerCost = true
        ListStore.myList[index].higherCost = false
    }
    else if (FormStore.dailyTravelSpend < ListStore.myList[index].trainTravelCost) {
        ListStore.myList[index].lowerCost = false
        ListStore.myList[index].higherCost = true
    }
}

export async function validatePostCode(postCode) {
    if (postcodeValidator(postCode, 'GB') === true) {
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
    axios.get(`https://api.tfl.gov.uk/Journey/JourneyResults/${FormStore.homePostCode}/to/${FormStore.destinationPostCode}&mode=walking,train,nation-rail&nationalSearch=true`)
     .then(res => {
         console.log(res)
         TravelStore.journeyData = res.data.journeys
         TravelStore.trainTravelTime = res.data.journeys[0].duration
        })
    //  .then(res => {
    //      TravelStore.journeyData = res.data
    //  })
    //  .then(console.log(TravelStore.journeyData))
}

export const getFareInfo = () => {
    axios.get('https://api.tfl.gov.uk/Stoppoint/490G01177G/FareTo/490G00012371')
    .then(res => {
        console.log(res)
    })
}

export const getHomeStopPoint = () => {
    // axios.get(`https://api.tfl.gov.uk/StopPoint/Search/${TravelStore.journeyData[0].legs[0].arrivalPoint.commonName}?modesFilter=train&maxResults=10`)
    // .then(res => console.log(res))
}

export const getHomeFareZone = (station) => {
    if (zoneNine.find(zone => zone === station)){
        console.log('zone 9')
        TravelStore.homeFareZone = 9
    }
    else if (zoneEight.find(zone => zone === station)){
        console.log('zone 8')
        TravelStore.homeFareZone = 8
    }
    else if (zoneSeven.find(zone => zone === station)){
        console.log('zone 7')
        TravelStore.homeFareZone = 7
    }
    else if (zoneSix.find(zone => zone === station)){
        console.log('zone 6')
        TravelStore.homeFareZone = 6
    }
    else if (zoneFive.find(zone => zone === station)){
        console.log('zone 5')
        TravelStore.homeFareZone = 5
    }
    else if (zoneFour.find(zone => zone === station)){
        console.log('zone 4')
        TravelStore.homeFareZone = 4
    }
    else if (zoneThree.find(zone => zone === station)){
        console.log('zone 3')
        TravelStore.homeFareZone = 3
    }
    else if (zoneTwo.find(zone => zone === station)){
        console.log('zone 2')
        TravelStore.homeFareZone = 2
    }
    else if (zoneOne.find(zone => zone === station)){
        console.log('zone 1')
        TravelStore.homeFareZone = 1
    }
    else {
        console.warn("Unable to find zone based on location")
        TravelStore.homeFareZone = 0
    } 
}

export const getDestinationFareZone = (station) => {
    if (zoneNine.find(zone => zone === station)){
        console.log('zone 9')
        TravelStore.destinationFareZone = 9
    }
    else if (zoneEight.find(zone => zone === station)){
        console.log('zone 8')
        TravelStore.destinationFareZone = 8
    }
    else if (zoneSeven.find(zone => zone === station)){
        console.log('zone 7')
        TravelStore.destinationFareZone = 7
    }
    else if (zoneSix.find(zone => zone === station)){
        console.log('zone 6')
        TravelStore.destinationFareZone = 6
    }
    else if (zoneFive.find(zone => zone === station)){
        console.log('zone 5')
        TravelStore.destinationFareZone = 5
    }
    else if (zoneFour.find(zone => zone === station)){
        console.log('zone 4')
        TravelStore.destinationFareZone = 4
    }
    else if (zoneThree.find(zone => zone === station)){
        console.log('zone 3')
        TravelStore.destinationFareZone = 3
    }
    else if (zoneTwo.find(zone => zone === station)){
        console.log('zone 2')
        TravelStore.destinationFareZone = 2
    }
    else if (zoneOne.find(zone => zone === station)){
        console.log('zone 1')
        TravelStore.destinationFareZone = 1
    }
    else {
        console.warn("Unable to find zone based on location")
        TravelStore.destinationFareZone = 0
    } 
}

export const getFarePrice = (zoneOne, zoneTwo) => {
    if (zoneOne === 1 && zoneTwo === 9 ){
        TravelStore.trainTravelCost = 24.80
    }
    else if (zoneOne === 1 && zoneTwo === 8){
        TravelStore.trainTravelCost = 24.80
    }
    else if (zoneOne === 1 && zoneTwo === 7){
        TravelStore.trainTravelCost = 24.80
    }
    else if (zoneOne === 1 && zoneTwo === 6){
        TravelStore.trainTravelCost = 19.60
    }
    else if (zoneOne === 1 && zoneTwo === 5){
        TravelStore.trainTravelCost = 19.60
    }
    else if (zoneOne === 1 && zoneTwo === 4){
        TravelStore.trainTravelCost = 13.90
    }
    else if (zoneOne === 1 && zoneTwo === 3){
        TravelStore.trainTravelCost = 13.90
    }
    else if (zoneOne === 1 && zoneTwo === 2){
        TravelStore.trainTravelCost = 13.90
    }
    else if (zoneOne === 1 && zoneTwo === 1){
        TravelStore.trainTravelCost = 13.90
    }
    else if (zoneOne === 2 && zoneTwo === 3){
        TravelStore.trainTravelCost = 13.90
    }
    else if (zoneOne === 2 && zoneTwo === 4){
        TravelStore.trainTravelCost = 13.90
    }
    else {
        TravelStore.trainTravelCost = 37.50
    }

    console.log(TravelStore.trainTravelCost)

}

export const findNearestStation = () => {
    let legs = TravelStore.journeyData[TravelStore.journeyData.length - 2].legs
    let filteredArrivalPoint = legs.filter((currentElement) => {
        return currentElement.mode.id === 'national-rail'
    })
    console.log(filteredArrivalPoint[0].arrivalPoint.commonName)
    TravelStore.nearestHomeStation = filteredArrivalPoint[0].arrivalPoint.commonName

    let filteredDeparturePoint = legs.filter((currentElement) => {
        return currentElement.mode.id === 'national-rail'
    })
    console.log(filteredDeparturePoint[filteredDeparturePoint.length - 1].departurePoint.commonName)
    TravelStore.nearestDestinationStation = filteredDeparturePoint[filteredDeparturePoint.length - 1].departurePoint.commonName
}

export const getAllTravelDetails = () => {
    FormStore.loading = true
    setTimeout(() => {
        setTimeout(() => {
            getTravelDetails()
        },2000)
        setTimeout(() => {
            findNearestStation()
        }, 3500)
        setTimeout(() => {
            getHomeFareZone(TravelStore.nearestHomeStation)
        }, 3600)
        setTimeout(() => {
            getDestinationFareZone(TravelStore.nearestDestinationStation)
        }, 3700)
        setTimeout(() => {
            getFarePrice(TravelStore.homeFareZone, TravelStore.destinationFareZone)
        }, 3800)
        setTimeout(() => {
            FormStore.loading = false
            TravelStore.show = true 
        }, 3900)
    }, 4000)
}