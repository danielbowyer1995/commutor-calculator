import { observable, action } from 'mobx'

export default new (class TravelStore {
  @observable show = false
  @observable homeLocation = ''
  @observable nearestDestinationStation = ''
  @observable nearestHomeStation = ''
  @observable journeyData = {}
  @observable trainTravelTime = ''
  @observable trainTravelCost = 0
  @observable lowerValue = false
  @observable higherValue = false
  @observable lowerCost = false
  @observable higherCost = false
  @observable homeFareZone = 0
  @observable destinationFareZone = 1
})()
