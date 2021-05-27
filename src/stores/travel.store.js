import { observable } from 'mobx'

const TravelStore = observable({
  show: false,
  homeLocation: '',
  nearestDestinationStation: '',
  nearestHomeStation: '',
  journeyData: {},
  trainTravelTime: '',
  trainTravelCost: 0,
  lowerValue: false,
  higherValue: false,
  lowerCost: false,
  higherCost: false,
  homeFareZone: 0,
  destinationFareZone: 1,
})
export default TravelStore
